-- DropForeignKey
ALTER TABLE "Archives" DROP CONSTRAINT "Archives_userId_fkey";

-- AddForeignKey
ALTER TABLE "Archives" ADD CONSTRAINT "Archives_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
