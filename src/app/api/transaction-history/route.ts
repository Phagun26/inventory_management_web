import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const productId = searchParams.get('productId')
    const rackNumber = searchParams.get('rackNumber')
    const operationType = searchParams.get('operationType')
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')

    const history = await prisma.transactionHistory.findMany({
      where: {
        operation: {
          AND: [
            productId ? {
              productId: {
                equals: productId
              }
            } : {},
            rackNumber ? {
              rack: {
                number: {
                  equals: rackNumber
                }
              }
            } : {},
            operationType ? {
              type: operationType
            } : {},
            startDate && endDate ? {
              createdAt: {
                gte: new Date(`${startDate}T00:00:00.000Z`),
                lte: new Date(`${endDate}T23:59:59.999Z`)
              }
            } : {}
          ]
        }
      },
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