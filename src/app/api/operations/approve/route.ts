import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const { operationIds } = await request.json()

    // Update operations to approved
    const operations = await prisma.operation.updateMany({
      where: {
        id: {
          in: operationIds
        }
      },
      data: {
        isApproved: true
      }
    })

    // Create transaction history records
    const historyRecords = await Promise.all(
      operationIds.map((id: string) =>
        prisma.transactionHistory.create({
          data: {
            operationId: id,
            userId: '1', // Default user ID
            action: 'APPROVED',
            notes: 'Operation approved'
          }
        })
      )
    )

    return NextResponse.json({ success: true, operations, historyRecords })
  } catch (error) {
    console.error('Error approving operations:', error)
    return NextResponse.json(
      { error: 'Failed to approve operations' },
      { status: 500 }
    )
  }
} 