import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import type { PrismaClient } from '@prisma/client'

type InventoryItem = Awaited<ReturnType<PrismaClient['inventory']['findMany']>>[number] & {
  product: { id: string; name: string }
  rack: { number: string }
}

export async function GET() {
  try {
    const inventoryItems = await prisma.inventory.findMany({
      include: {
        product: {
          select: {
            id: true,
            name: true
          }
        },
        rack: {
          select: {
            number: true
          }
        }
      }
    }) as InventoryItem[]

    console.log('Raw inventory data:', inventoryItems)

    // Transform the data to match the expected format
    const formattedItems = inventoryItems.map(item => ({
      id: item.product.id,
      name: item.product.name,
      quantity: item.quantity,
      rackNumber: item.rack.number
    }))

    return NextResponse.json(formattedItems)
  } catch (error) {
    console.error('Error fetching inventory:', error)
    return NextResponse.json(
      { error: 'Failed to fetch inventory' },
      { status: 500 }
    )
  }
} 