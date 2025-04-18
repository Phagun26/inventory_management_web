import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Check if admin user already exists
  const existingAdmin = await prisma.user.findFirst({
    where: {
      username: 'Phagun',
      isAdmin: true
    }
  })

  if (!existingAdmin) {
    // Create a default organization if it doesn't exist
    const defaultOrg = await prisma.organization.upsert({
      where: { id: 'default-org' },
      update: {},
      create: {
        id: 'default-org',
        name: 'Default Organization',
        gstin: 'DEFAULT123456789',
        address: 'Default Address'
      }
    })

    // Create admin user
    const hashedPassword = await bcrypt.hash('password12345', 10)
    await prisma.user.create({
      data: {
        id: 'admin-user',
        username: 'Phagun',
        password: hashedPassword,
        name: 'Admin User',
        designation: 'Administrator',
        mobileNumber: '0000000000',
        isAdmin: true,
        organizationId: defaultOrg.id
      }
    })
    console.log('Admin user created successfully')
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 