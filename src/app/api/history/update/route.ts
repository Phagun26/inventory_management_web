import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { randomBytes } from 'crypto'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

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
      // Get default product and rack
      const defaultProduct = await prisma.product.findFirst({
        where: { id: 'PROD-LAP001' }
      })
      const defaultRack = await prisma.rack.findFirst({
        where: { id: 'R001' }
      })

      if (!defaultProduct || !defaultRack) {
        return NextResponse.json(
          { error: 'Default product or rack not found' },
          { status: 500 }
        )
      }

      // Generate unique ID for operation
      const uniqueId = `op-${Date.now()}-${randomBytes(4).toString('hex')}`

      // Create a new operation record
      const operation = await prisma.operation.create({
        data: {
          id: uniqueId,
          type: 'INWARD', // Default type
          quantity: 0, // Default quantity
          productId: type === 'item' ? value : defaultProduct.id,
          rackId: type === 'rack' ? value : defaultRack.id,
          userId: session.user.id,
          isApproved: false // Default approval status
        }
      })

      // Create transaction history record
      await prisma.transactionHistory.create({
        data: {
          operationId: operation.id,
          userId: session.user.id,
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