// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Category

const electronics = await prisma.category.upsert({
  where: {
    name: "Electronics",
  },
  update: {},
  create: {
    name: "Electronics",
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
});

  // User
  const hashedPassword = await bcrypt.hash('password123', 10);
  await prisma.user.create({
    data: {
      email: 'test@example.com',
      password: hashedPassword,
      name: 'Test User',
    },
  });

  // Product
  const product = await prisma.product.create({
    data: {
      name: 'Wireless Headphones',
      slug: 'wireless-headphones',
      description: 'High-quality wireless headphones',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      categoryId: electronics.id,
    },
  });

  // Inventory
  await prisma.inventory.create({
    data: {
      productId: product.id,
      stock: 25,
    },
  });

  console.log('✅ Seed done!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
