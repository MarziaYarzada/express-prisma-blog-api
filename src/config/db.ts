// src/config/db.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Connect to the database
prisma.$connect()
  .then(() => console.log("✔ Connected to the database"))
  .catch((err:any) => {
    console.error("✖ Failed to connect to the database:", err);
    process.exit(1);
  });

// Gracefully disconnect Prisma on app shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log(" Prisma disconnected on app termination");
  process.exit(0);
});

export default prisma;
