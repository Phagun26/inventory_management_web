import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { rackId: string } }
) {
  try {
    const rackId = params.rackId

    const products = await prisma.inventory.findMany({
      where: {
        rackId: rackId,
        quantity: {
          gt: 0
        }
      },
      include: {
        product: {
          select: {
            id: true,
            name: true
          }
        }
      }
    })

    const formattedProducts = products.map(item => ({
      id: item.product.id,
      name: item.product.name,
      quantity: item.quantity
    }))

    return NextResponse.json(formattedProducts)
  } catch (error) {
    console.error('Error fetching rack products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch rack products' },
      { status: 500 }
    )
  }
} 