import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')
    const type = searchParams.get('type')

    if (!query) {
      return NextResponse.json({ error: 'Search query is required' }, { status: 400 })
    }

    if (type === 'product') {
      const products = await prisma.product.findMany({
        where: {
          OR: [
            { name: { contains: query } },
            { sku: { contains: query } }
          ]
        },
        include: {
          inventory: {
            include: {
              rack: true
            }
          }
        }
      })
      return NextResponse.json(products)
    }

    if (type === 'rack') {
      const rack = await prisma.rack.findFirst({
        where: {
          number: query
        },
        include: {
          inventory: {
            include: {
              product: true
            }
          }
        }
      })
      return NextResponse.json(rack)
    }

    return NextResponse.json({ error: 'Invalid search type' }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to perform search' }, { status: 500 })
  }
} 