import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const operationId = params.id

    // Use a transaction to ensure all operations are atomic
    const result = await prisma.$transaction(async (tx) => {
      // Get the operation with its pending inventory
      const operation = await tx.operation.findUnique({
        where: { id: operationId },
        include: {
          pendingInventory: true,
        },
      })

      if (!operation) {
        throw new Error('Operation not found')
      }

      if (operation.isApproved) {
        throw new Error('Operation already approved')
      }

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
          throw new Error('Insufficient quantity in inventory')
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
        include: {
          product: true,
          rack: true,
          user: true,
        },
      })

      // Create transaction history
      await tx.transactionHistory.create({
        data: {
          operationId: operation.id,
          userId: operation.userId,
          action: 'APPROVED',
          notes: `${operation.type} operation approved for ${operation.quantity} units`,
        },
      })

      return updatedOperation
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error approving operation:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to approve operation'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
} 