/*
  Warnings:

  - You are about to drop the `Blocks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Blocks" DROP CONSTRAINT "Blocks_userId_fkey";

-- DropTable
DROP TABLE "Blocks";

-- CreateTable
CREATE TABLE "Blocs" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "img" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT,
    "emails" TEXT NOT NULL,

    CONSTRAINT "Blocs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Blocs" ADD CONSTRAINT "Blocs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
