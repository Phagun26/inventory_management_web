import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { randomBytes } from 'crypto'

export async function POST(request: Request) {
  try {
    const { type, quantity, productId, userId, rackId } = await request.json()
    console.log('Creating new operation:', { type, quantity, productId, userId, rackId })

    // Generate a unique operation ID using timestamp and random bytes
    const uniqueId = `op-${Date.now()}-${randomBytes(4).toString('hex')}`
    const pendingInventoryId = `pi-${Date.now()}-${randomBytes(4).toString('hex')}`

    // For INWARD operations, create product and rack if they don't exist
    if (type === 'INWARD') {
      // Check and create product if it doesn't exist
      let product = await prisma.product.findUnique({
        where: { id: productId }
      })
      
      if (!product) {
        console.log('Creating new product:', productId)
        // Create a more descriptive name for the product
        const productName = `${productId}`
        product = await prisma.product.create({
          data: {
            id: productId,
            name: productName,
            sku: productId,
            price: 0, // Default price
            description: `Auto-created product with ID: ${productId}` // More descriptive
          }
        })
      }

      // Check and create rack if it doesn't exist
      let rack = await prisma.rack.findUnique({
        where: { id: rackId }
      })

      if (!rack) {
        console.log('Creating new rack:', rackId)
        // Create a more descriptive rack number
        const rackNumber = `${rackId}`
        rack = await prisma.rack.create({
          data: {
            id: rackId,
            number: rackNumber,
            description: `Auto-created rack with ID: ${rackId}`
          }
        })
      }
    } else {
      // For OUTWARD, validate existing product and rack
      const product = await prisma.product.findUnique({
        where: { id: productId }
      })
      if (!product) {
        console.log('Product not found:', productId)
        return NextResponse.json({ error: 'Product not found' }, { status: 404 })
      }

      const rack = await prisma.rack.findUnique({
        where: { id: rackId }
      })
      if (!rack) {
        console.log('Rack not found:', rackId)
        return NextResponse.json({ error: 'Rack not found' }, { status: 404 })
      }
    }

    // Validate if user exists
    const user = await prisma.user.findUnique({
      where: { id: userId.toString() }
    })
    if (!user) {
      console.log('User not found:', userId)
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Validate quantity for outward operations
    if (type === 'OUTWARD') {
      const inventory = await prisma.inventory.findFirst({
        where: {
          productId,
          rackId
        }
      })
      console.log('Current inventory for outward:', inventory)

      if (!inventory || inventory.quantity < quantity) {
        console.log('Insufficient quantity. Required:', quantity, 'Available:', inventory?.quantity)
        return NextResponse.json({ error: 'Insufficient quantity in inventory' }, { status: 400 })
      }
    }

    const operation = await prisma.operation.create({
      data: {
        id: uniqueId,
        type,
        quantity,
        productId,
        userId: userId.toString(),
        rackId,
        isApproved: false
      } as any, // Type assertion to bypass TypeScript error
      include: {
        product: true,
        rack: true,
        user: true
      }
    })

    // Create pending inventory entry
    await (prisma as any).pendingInventory.create({
      data: {
        id: pendingInventoryId,
        quantity,
        productId,
        rackId,
        operationId: operation.id
      }
    })

    console.log('Operation created successfully:', operation)
    return NextResponse.json(operation)
  } catch (error) {
    console.error('Error creating operation:', error)
    return NextResponse.json({ error: 'Failed to create operation' }, { status: 500 })
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