/*
  Warnings:

  - You are about to drop the column `age` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `bdsm_activity` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `is_ad_visible` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `legal_disclaimer` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `pictures` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `postBody` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `receiveCall` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isAdmin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Physical` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Service` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `authorId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Made the column `updatedAt` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "Physical" DROP CONSTRAINT "Physical_postId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_postId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "age",
DROP COLUMN "bdsm_activity",
DROP COLUMN "category",
DROP COLUMN "city",
DROP COLUMN "gender",
DROP COLUMN "is_ad_visible",
DROP COLUMN "legal_disclaimer",
DROP COLUMN "location",
DROP COLUMN "number",
DROP COLUMN "pictures",
DROP COLUMN "postBody",
DROP COLUMN "receiveCall",
DROP COLUMN "state",
DROP COLUMN "userId",
ADD COLUMN     "authorId" INTEGER NOT NULL,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "isAdmin",
DROP COLUMN "password",
DROP COLUMN "updatedAt",
ADD COLUMN     "name" TEXT,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE "Physical";

-- DropTable
DROP TABLE "Service";

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "bio" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToPost_AB_unique" ON "_CategoryToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToPost_B_index" ON "_CategoryToPost"("B");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPost" ADD CONSTRAINT "_CategoryToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPost" ADD CONSTRAINT "_CategoryToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
