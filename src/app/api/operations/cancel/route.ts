import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const { operationId, userId } = await request.json()
    console.log('Cancelling operation:', operationId)

    // Verify user is admin
    const user = await prisma.user.findFirst({
      where: { id: userId.toString() }
    })

    if (!user || !user.isAdmin) {
      console.error('Unauthorized: User is not an admin')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    // Start a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Find the operation details for history
      const operation = await tx.operation.findFirst({
        where: { id: operationId.toString() },
        include: { product: true, rack: true }
      })

      if (!operation) {
        throw new Error(`Operation not found: ${operationId}`)
      }

      // Find the pending inventory entries related to this operation
      const pendingInventory = await tx.pendingInventory.findMany({
        where: {
          operationId: operationId.toString()
        }
      })

      console.log('Found pending inventory entries:', pendingInventory)

      // Delete the pending inventory entries
      if (pendingInventory.length > 0) {
        await tx.pendingInventory.deleteMany({
          where: {
            operationId: operationId.toString()
          }
        })
        console.log('Deleted pending inventory entries')
      }

      // Update the operation to mark it as cancelled 
      // (We're keeping it in the DB for audit purposes but marking it as cancelled)
      await tx.operation.update({
        where: {
          id: operationId.toString()
        },
        data: {
          isApproved: false,
          isCancelled: true
        }
      })
      console.log('Marked operation as cancelled')

      // Create transaction history record
      await tx.transactionHistory.create({
        data: {
          operationId: operationId.toString(),
          userId: userId.toString(),
          action: 'CANCELLED',
          notes: `${operation.type} of ${operation.quantity} ${operation.product.name} at rack ${operation.rack.number} cancelled`
        }
      })
      console.log('Recorded transaction history for cancelled operation')

      return { success: true }
    })

    console.log('Transaction completed successfully')
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error in cancellation process:', error)
    return NextResponse.json({ error: 'Failed to cancel operation' }, { status: 500 })
  }
} 