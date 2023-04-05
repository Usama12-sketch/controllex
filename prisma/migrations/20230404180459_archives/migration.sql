-- AlterTable
ALTER TABLE "Archives" ADD COLUMN     "postId" TEXT,
ALTER COLUMN "archive" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Archives" ADD CONSTRAINT "Archives_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
