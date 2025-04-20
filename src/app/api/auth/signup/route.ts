import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { username, password, name, designation, mobileNumber, organizationId } = await request.json()

    // Check if username already exists
    const existingUser = await prisma.user.findFirst({
      where: { username }
    })

    if (existingUser) {
      return NextResponse.json({ error: 'Username already exists' }, { status: 400 })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create the user with the selected organization
    const user = await prisma.user.create({
      data: {
        id: crypto.randomUUID(),
        username,
        password: hashedPassword,
        name,
        designation,
        mobileNumber,
        isAdmin: false,
        organization: {
          connect: {
            id: organizationId.toString()
          }
        }
      }
    })

    return NextResponse.json({
      id: user.id,
      username: user.username,
      name: user.name,
      designation: user.designation,
      mobileNumber: user.mobileNumber,
      isAdmin: user.isAdmin,
      organizationId: user.organizationId
    })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 