/*
  Warnings:

  - You are about to drop the `Draft` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Draft" DROP CONSTRAINT "Draft_userId_fkey";

-- DropTable
DROP TABLE "Draft";

-- CreateTable
CREATE TABLE "Hearts" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "heart" BOOLEAN NOT NULL DEFAULT false,
    "postId" TEXT,

    CONSTRAINT "Hearts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Hearts" ADD CONSTRAINT "Hearts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hearts" ADD CONSTRAINT "Hearts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
