/*
  Warnings:

  - You are about to drop the column `postId` on the `bdsmActivity` table. All the data in the column will be lost.
  - You are about to drop the `_PostTobdsmActivity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PostTobdsmActivity" DROP CONSTRAINT "_PostTobdsmActivity_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostTobdsmActivity" DROP CONSTRAINT "_PostTobdsmActivity_B_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "bdsm_activity" TEXT[];

-- AlterTable
ALTER TABLE "bdsmActivity" DROP COLUMN "postId";

-- DropTable
DROP TABLE "_PostTobdsmActivity";
