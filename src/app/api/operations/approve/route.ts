import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const { operationIds, userId } = await request.json()
    
    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 401 })
    }

    console.log('Approving operations:', operationIds)

    // Get operations with their details
    const operations = await prisma.operation.findMany({
      where: {
        id: {
          in: operationIds
        }
      },
      include: {
        user: true,
        product: true,
        rack: true,
        pendingInventory: true
      }
    })
    console.log('Found operations:', operations)

    // Verify all operations have valid users
    const invalidOperations = operations.filter(op => !op.user)
    if (invalidOperations.length > 0) {
      return NextResponse.json(
        { 
          error: 'Some operations have invalid users',
          invalidOperationIds: invalidOperations.map(op => op.id)
        },
        { status: 400 }
      )
    }

    // Use a transaction to ensure all operations are atomic
    const result = await prisma.$transaction(async (tx) => {
      const updatedOperations = []
      const historyRecords = []

      for (const operation of operations) {
        // Find existing inventory
        let inventory = await tx.inventory.findFirst({
          where: {
            productId: operation.productId,
            rackId: operation.rackId,
          },
        })

        // Update or create inventory based on operation type
        if (operation.type === 'INWARD') {
          if (inventory) {
            // Update existing inventory
            inventory = await tx.inventory.update({
              where: {
                productId_rackId: {
                  productId: operation.productId,
                  rackId: operation.rackId,
                },
              },
              data: {
                quantity: inventory.quantity + operation.quantity,
              },
            })
          } else {
            // Create new inventory
            inventory = await tx.inventory.create({
              data: {
                productId: operation.productId,
                rackId: operation.rackId,
                quantity: operation.quantity,
              },
            })
          }
        } else if (operation.type === 'OUTWARD') {
          if (!inventory || inventory.quantity < operation.quantity) {
            throw new Error(`Insufficient quantity in inventory for operation ${operation.id}`)
          }

          // Update inventory
          inventory = await tx.inventory.update({
            where: {
              productId_rackId: {
                productId: operation.productId,
                rackId: operation.rackId,
              },
            },
            data: {
              quantity: inventory.quantity - operation.quantity,
            },
          })
        }

        // Delete pending inventory
        if (operation.pendingInventory.length > 0) {
          await tx.pendingInventory.deleteMany({
            where: {
              operationId: operation.id,
            },
          })
        }

        // Update operation status
        const updatedOperation = await tx.operation.update({
          where: { id: operation.id },
          data: {
            isApproved: true,
          },
        })

        // Create transaction history
        const historyRecord = await tx.transactionHistory.create({
          data: {
            operationId: operation.id,
            userId: operation.userId,
            action: 'APPROVED',
            notes: `${operation.type} operation approved for ${operation.quantity} units`,
          },
        })

        updatedOperations.push(updatedOperation)
        historyRecords.push(historyRecord)
      }

      return { updatedOperations, historyRecords }
    })

    return NextResponse.json({ success: true, ...result })
  } catch (error) {
    console.error('Error approving operations:', error)
    // Log detailed error information
    if (error instanceof Error) {
      console.error('Error name:', error.name)
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
    // If it's a Prisma error, log additional details
    if (error && typeof error === 'object' && 'code' in error) {
      console.error('Prisma error code:', error.code)
      console.error('Prisma error meta:', (error as any).meta)
    }
    return NextResponse.json(
      { 
        error: 'Failed to approve operations',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 