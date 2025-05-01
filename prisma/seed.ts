// import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { PrismaClient } from '../src/generated/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : []
}).$extends(withAccelerate())

// const prisma = new PrismaClient()

async function main() {
  // Create default organization
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

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  await prisma.user.upsert({
    where: { id: 'USER001' },
    update: {},
    create: {
      id: 'USER001',
      username: 'admin',
      password: hashedPassword,
      name: 'Jatin Badani',
      designation: 'Admin',
      mobileNumber: '1234567890',
      isAdmin: true,
      organizationId: organization.id,
    },
  })

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { id: 'CAT001' },
      update: {},
      create: {
        id: 'CAT001',
        name: 'Electronics',
        description: 'Electronic devices and components',
      },
    }),
    prisma.category.upsert({
      where: { id: 'CAT002' },
      update: {},
      create: {
        id: 'CAT002',
        name: 'Clothing',
        description: 'Apparel and accessories',
      },
    }),
  ])

  // Create products
  const products = await Promise.all([
    prisma.product.upsert({
      where: { id: 'PROD-LAP001' },
      update: {},
      create: {
        id: 'PROD-LAP001',
        name: 'Laptop',
        description: 'High-performance laptop',
        price: 999.99,
        sku: 'LAP001',
      },
    }),
    prisma.product.upsert({
      where: { id: 'PROD-TSH001' },
      update: {},
      create: {
        id: 'PROD-TSH001',
        name: 'T-Shirt',
        description: 'Cotton t-shirt',
        price: 19.99,
        sku: 'TSH001',
      },
    }),
  ])

  // Create racks
  const racks = await Promise.all([
    prisma.rack.upsert({
      where: { id: 'R001' },
      update: {},
      create: {
        id: 'R001',
        number: 'R001',
        description: 'Main electronics rack',
      },
    }),
    prisma.rack.upsert({
      where: { id: 'R002' },
      update: {},
      create: {
        id: 'R002',
        number: 'R002',
        description: 'Clothing rack',
      },
    }),
  ])

  // Create initial inventory
  await Promise.all([
    prisma.inventory.upsert({
      where: {
        productId_rackId: {
          productId: products[0].id,
          rackId: racks[0].id,
        },
      },
      update: {},
      create: {
        quantity: 10,
        productId: products[0].id,
        rackId: racks[0].id,
      },
    }),
    prisma.inventory.upsert({
      where: {
        productId_rackId: {
          productId: products[1].id,
          rackId: racks[1].id,
        },
      },
      update: {},
      create: {
        quantity: 50,
        productId: products[1].id,
        rackId: racks[1].id,
      },
    }),
  ])

  console.log('Database has been seeded.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 