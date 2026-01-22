import { PrismaClient } from "@prisma/client";
import { PrismaNodeAdapter } from "@prisma/adapter-node";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter: new PrismaNodeAdapter(),
    log: ["error", "warn"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
