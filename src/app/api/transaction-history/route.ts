import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const history = await prisma.transactionHistory.findMany({
      include: {
        user: {
          select: {
            name: true
          }
        },
        operation: {
          include: {
            product: {
              select: {
                name: true
              }
            },
            rack: {
              select: {
                number: true
              }
            }
          }
        }
      },
      orderBy: {
        timestamp: 'desc'
      }
    })

    return NextResponse.json(history)
  } catch (error) {
    console.error('Error fetching transaction history:', error)
    return NextResponse.json(
      { error: 'Failed to fetch transaction history' },
      { status: 500 }
    )
  }
} 