/*
  Warnings:

  - You are about to drop the column `postId` on the `Archives` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Archives" DROP CONSTRAINT "Archives_postId_fkey";

-- DropForeignKey
ALTER TABLE "Archives" DROP CONSTRAINT "Archives_userId_fkey";

-- AlterTable
ALTER TABLE "Archives" DROP COLUMN "postId",
ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Archives" ADD CONSTRAINT "Archives_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
