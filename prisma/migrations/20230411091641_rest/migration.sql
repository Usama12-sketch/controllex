/*
  Warnings:

  - You are about to drop the `Contents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `title` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Contents" DROP CONSTRAINT "Contents_postId_fkey";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "title" SET NOT NULL;

-- DropTable
DROP TABLE "Contents";

-- DropTable
DROP TABLE "Image";
