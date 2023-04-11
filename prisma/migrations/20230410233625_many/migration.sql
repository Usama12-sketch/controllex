-- CreateTable
CREATE TABLE "Contents" (
    "id" TEXT NOT NULL,
    "text" TEXT,
    "image" TEXT,
    "postId" TEXT,

    CONSTRAINT "Contents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Contents" ADD CONSTRAINT "Contents_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
