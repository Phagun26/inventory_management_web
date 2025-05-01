import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { randomBytes } from 'crypto'

interface OperationRequest {
  type: 'INWARD' | 'OUTWARD'
  quantity: number
  productId: string
  userId: string
  rackId: string
}

export async function POST(request: Request) {
  try {
    const { type, quantity, productId, userId, rackId } = (await request.json()) as OperationRequest
    console.log('Creating new operation:', { type, quantity, productId, userId, rackId })

    // Generate unique IDs
    const uniqueId = `op-${Date.now()}-${randomBytes(4).toString('hex')}`
    const pendingInventoryId = `pi-${Date.now()}-${randomBytes(4).toString('hex')}`

    // Use a transaction to ensure all operations are atomic
    const result = await prisma.$transaction(async (tx) => {
      // Validate user first
      const user = await tx.user.findFirst({
        where: { id: userId }
      })
      if (!user) {
        throw new Error('User not found')
      }

      // For INWARD operations, handle product and rack creation
      if (type === 'INWARD') {
        // Check and create product if it doesn't exist
        let product = await tx.product.findFirst({
          where: { id: productId }
        })
        
        if (!product) {
          console.log('Creating new product:', productId)
          product = await tx.product.create({
            data: {
              id: productId,
              name: productId,
              sku: productId,
              price: 0,
              description: `Auto-created product with ID: ${productId}`
            }
          })
        }

        // Check if rack exists first
        let rack = await tx.rack.findFirst({
          where: { id: rackId }
        })

        if (!rack) {
          console.log('Creating new rack:', rackId)
          try {
            rack = await tx.rack.create({
              data: {
                id: rackId,
                number: rackId,
                description: `Auto-created rack with ID: ${rackId}`
              }
            })
          } catch (error) {
            // If rack creation fails, check if it was created concurrently
            rack = await tx.rack.findFirst({
              where: { id: rackId }
            })
            if (!rack) {
              throw new Error('Failed to create rack')
            }
          }
        }
      } else {
        // For OUTWARD operations
        const [product, rack, inventory] = await Promise.all([
          tx.product.findFirst({ where: { id: productId } }),
          tx.rack.findFirst({ where: { id: rackId } }),
          tx.inventory.findFirst({
            where: {
              productId,
              rackId
            }
          })
        ])

        if (!product) throw new Error('Product not found')
        if (!rack) throw new Error('Rack not found')
        if (!inventory || inventory.quantity < quantity) {
          throw new Error('Insufficient quantity in inventory')
        }
      }

      // Create the operation
      const operation = await tx.operation.create({
        data: {
          id: uniqueId,
          type,
          quantity,
          productId,
          userId,
          rackId,
          isApproved: false
        },
        include: {
          product: true,
          rack: true,
          user: true
        }
      })

      // Create pending inventory entry
      const pendingInventory = await tx.pendingInventory.create({
        data: {
          id: pendingInventoryId,
          quantity,
          productId,
          rackId,
          operationId: operation.id
        }
      })

      return { operation, pendingInventory }
    })

    console.log('Operation created successfully:', result.operation)
    return NextResponse.json(result.operation)
  } catch (error) {
    console.error('Error creating operation:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to create operation'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const pending = searchParams.get('pending') === 'true'

    const operations = await prisma.operation.findMany({
      where: pending ? { 
        isApproved: false
      } : undefined,
      include: {
        product: true,
        rack: true,
        user: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(operations)
  } catch (error) {
    console.error('Error fetching operations:', error)
    return NextResponse.json({ error: 'Failed to fetch operations' }, { status: 500 })
  }
} 