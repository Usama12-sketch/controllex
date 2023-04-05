/*
  Warnings:

  - You are about to drop the column `comments` on the `Comments` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `Comments` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Comments` table. All the data in the column will be lost.
  - Added the required column `comment` to the `Comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comments" DROP COLUMN "comments",
DROP COLUMN "img",
DROP COLUMN "name",
ADD COLUMN     "comment" TEXT NOT NULL,
ADD COLUMN     "postId" TEXT;

-- CreateTable
CREATE TABLE "Archives" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "archive" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "postId" TEXT,
    "userId" TEXT,

    CONSTRAINT "Archives_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Archives" ADD CONSTRAINT "Archives_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Archives" ADD CONSTRAINT "Archives_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
