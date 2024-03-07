/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "password",
DROP COLUMN "updatedAt",
ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "receiveEmail" BOOLEAN NOT NULL,
    "number" TEXT NOT NULL,
    "pictures" TEXT[],
    "userId" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "bdsm_activity" TEXT[],
    "is_ad_visible" BOOLEAN NOT NULL,
    "legal_disclaimer" BOOLEAN NOT NULL,
    "receive_phone" BOOLEAN NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "callOption" TEXT NOT NULL,
    "working_hours" TEXT NOT NULL,
    "your_role" TEXT NOT NULL,
    "payment_methods" TEXT[],
    "postId" INTEGER,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Physical" (
    "id" SERIAL NOT NULL,
    "ethnicity" TEXT[],
    "hair_color" TEXT NOT NULL,
    "tattoo" TEXT NOT NULL,
    "postId" INTEGER,

    CONSTRAINT "Physical_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Physical" ADD CONSTRAINT "Physical_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
