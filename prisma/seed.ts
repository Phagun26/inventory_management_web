import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create default organization
  const organization = await prisma.organization.upsert({
    where: { name: 'Jevi Prints' },
    update: {},
    create: {
      name: 'Jevi Prints',
      gstin: 'GSTIN123456789', // Replace with actual GSTIN
      address: '123 Business Street, City, State, Country',
    },
  })

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
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
      where: { name: 'Electronics' },
      update: {},
      create: {
        name: 'Electronics',
        description: 'Electronic devices and components',
      },
    }),
    prisma.category.upsert({
      where: { name: 'Clothing' },
      update: {},
      create: {
        name: 'Clothing',
        description: 'Apparel and accessories',
      },
    }),
  ])

  // Create products with manual IDs
  const products = await Promise.all([
    prisma.product.upsert({
      where: { sku: 'LAP001' },
      update: {},
      create: {
        id: 'PROD-LAP001',
        name: 'Laptop',
        description: 'High-performance laptop',
        price: 999.99,
        sku: 'LAP001',
        categoryId: categories[0].id,
      },
    }),
    prisma.product.upsert({
      where: { sku: 'TSH001' },
      update: {},
      create: {
        id: 'PROD-TSH001',
        name: 'T-Shirt',
        description: 'Cotton t-shirt',
        price: 19.99,
        sku: 'TSH001',
        categoryId: categories[1].id,
      },
    }),
  ])

  // Create racks with manual IDs
  const racks = await Promise.all([
    prisma.rack.upsert({
      where: { number: 'R001' },
      update: {},
      create: {
        id: 'R001',
        number: 'R001',
        description: 'Main electronics rack',
      },
    }),
    prisma.rack.upsert({
      where: { number: 'R002' },
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
      where: { productId: products[0].id },
      update: {},
      create: {
        quantity: 10,
        productId: products[0].id,
        rackId: racks[0].id,
      },
    }),
    prisma.inventory.upsert({
      where: { productId: products[1].id },
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