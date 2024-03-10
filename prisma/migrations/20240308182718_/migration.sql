/*
  Warnings:

  - You are about to drop the column `bdsm_activity` on the `Post` table. All the data in the column will be lost.
  - Added the required column `postId` to the `bdsmActivity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "bdsm_activity";

-- AlterTable
ALTER TABLE "bdsmActivity" ADD COLUMN     "postId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "_PostTobdsmActivity" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PostTobdsmActivity_AB_unique" ON "_PostTobdsmActivity"("A", "B");

-- CreateIndex
CREATE INDEX "_PostTobdsmActivity_B_index" ON "_PostTobdsmActivity"("B");

-- AddForeignKey
ALTER TABLE "_PostTobdsmActivity" ADD CONSTRAINT "_PostTobdsmActivity_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostTobdsmActivity" ADD CONSTRAINT "_PostTobdsmActivity_B_fkey" FOREIGN KEY ("B") REFERENCES "bdsmActivity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
