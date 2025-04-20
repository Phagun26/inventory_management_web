import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const { type, value } = await request.json()

    // Check if the value already exists in the database
    const existingHistory = await prisma.transactionHistory.findFirst({
      where: {
        operation: {
          OR: [
            { productId: value },
            { rack: { number: value } }
          ]
        }
      }
    })

    if (!existingHistory) {
      // Create a new operation record
      const operation = await prisma.operation.create({
        data: {
          type: 'INWARD', // Default type
          quantity: 0, // Default quantity
          productId: type === 'item' ? value : '', // Only set if it's an item
          rackId: type === 'rack' ? value : '', // Only set if it's a rack
          userId: '1' // Default user ID
        }
      })

      // Create transaction history record
      await prisma.transactionHistory.create({
        data: {
          operationId: operation.id,
          userId: '1', // Default user ID
          action: 'CREATED',
          notes: `New ${type} added: ${value}`
        }
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating history:', error)
    return NextResponse.json(
      { error: 'Failed to update history' },
      { status: 500 }
    )
  }
} 