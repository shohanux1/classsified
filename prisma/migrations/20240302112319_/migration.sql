/*
  Warnings:

  - You are about to drop the column `bdscActivity` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "bdscActivity",
ADD COLUMN     "bdsm_activity" TEXT[];
