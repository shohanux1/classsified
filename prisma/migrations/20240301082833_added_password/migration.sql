/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "category" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Service" ALTER COLUMN "working_hours" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL;
