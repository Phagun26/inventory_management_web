import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

async function addOrganization() {
  try {
    const organization = await prisma.organization.upsert({
      where: { id: 'ORG001' },
      update: {},
      create: {
        id: 'ORG001',
        name: 'Jevi Prints',
        gstin: 'GSTIN123456789',
        address: '123 Business Street, City, State, Country',
      },
    })

    console.log('Organization added successfully:', organization)
  } catch (error) {
    console.error('Error adding organization:', error)
  } finally {
    await prisma.$disconnect()
  }
}

addOrganization() 