import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { PrismaClient, Prisma } from '@prisma/client'

export async function POST(request: Request) {
  try {
    const { operationIds, userId } = await request.json()
    console.log('Approving operations:', operationIds)

    // Verify user is admin
    const user = await prisma.user.findUnique({
      where: { id: userId.toString() }
    })

    if (!user || !user.isAdmin) {
      console.error('Unauthorized: User is not an admin')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    // Start a transaction
    const result = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      console.log('Starting transaction')

      // Update operations to approved
      await tx.operation.updateMany({
        where: {
          id: {
            in: operationIds
          }
        },
        data: {
          isApproved: true
        }
      })
      console.log('Operations marked as approved')

      // Get all approved operations
      const operations = await tx.operation.findMany({
        where: {
          id: {
            in: operationIds
          }
        },
        include: {
          product: true,
          rack: true
        }
      })
      console.log('Found operations to process:', operations)

      // Record transaction history for each operation
      for (const operation of operations) {
        // @ts-ignore - Type issues with the generated Prisma client
        await tx.transactionHistory.create({
          data: {
            operationId: operation.id,
            userId: userId.toString(),
            action: 'APPROVED',
            notes: `${operation.type} of ${operation.quantity} ${operation.product.name} at rack ${operation.rack.number}`
          }
        })
      }
      console.log('Recorded transaction history for approved operations')

      // Update inventory for each operation
      for (const operation of operations) {
        console.log('Processing operation:', operation)

        if (operation.type === 'INWARD') {
          // For INWARD operations, first check if inventory exists
          const existingInventory = await tx.inventory.findFirst({
            where: {
              AND: [
                { productId: operation.productId },
                { rackId: operation.rackId }
              ]
            }
          });
          
          if (existingInventory) {
            // Update existing inventory
            await tx.inventory.updateMany({
              where: {
                AND: [
                  { productId: operation.productId },
                  { rackId: operation.rackId }
                ]
              },
              data: {
                quantity: {
                  increment: operation.quantity
                }
              }
            });
          } else {
            // Create new inventory
            await tx.inventory.create({
              data: {
                quantity: operation.quantity,
                productId: operation.productId,
                rackId: operation.rackId
              }
            });
          }
          
          console.log('Updated/created inventory for inward operation');
        } else {
          // For OUTWARD operations, update existing inventory
          const inventory = await tx.inventory.findFirst({
            where: {
              AND: [
                { productId: operation.productId },
                { rackId: operation.rackId }
              ]
            }
          })

          if (!inventory) {
            throw new Error(`Cannot process outward operation: No inventory found for product ${operation.productId} at rack ${operation.rackId}`)
          }

          if (inventory.quantity < operation.quantity) {
            throw new Error(`Insufficient quantity. Required: ${operation.quantity}, Available: ${inventory.quantity}`)
          }

          await tx.inventory.updateMany({
            where: {
              AND: [
                { productId: operation.productId },
                { rackId: operation.rackId }
              ]
            },
            data: {
              quantity: {
                decrement: operation.quantity
              }
            }
          })
          console.log('Updated inventory for outward operation')
        }
      }

      // Verify final inventory state
      const finalInventory = await tx.inventory.findMany({
        where: {
          productId: {
            in: operations.map(op => op.productId)
          }
        }
      })
      console.log('Final inventory state:', finalInventory)

      return operations
    })

    console.log('Transaction completed successfully')
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error in approval process:', error)
    return NextResponse.json({ error: 'Failed to approve operations' }, { status: 500 })
  }
} 