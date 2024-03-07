/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `physicalId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `Post` table. All the data in the column will be lost.
  - Added the required column `category_id` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_physicalId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_serviceId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "categoryId",
DROP COLUMN "physicalId",
DROP COLUMN "serviceId",
ADD COLUMN     "category_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "_PostToService" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PhysicalToPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PostToService_AB_unique" ON "_PostToService"("A", "B");

-- CreateIndex
CREATE INDEX "_PostToService_B_index" ON "_PostToService"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PhysicalToPost_AB_unique" ON "_PhysicalToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_PhysicalToPost_B_index" ON "_PhysicalToPost"("B");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToService" ADD CONSTRAINT "_PostToService_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToService" ADD CONSTRAINT "_PostToService_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PhysicalToPost" ADD CONSTRAINT "_PhysicalToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Physical"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PhysicalToPost" ADD CONSTRAINT "_PhysicalToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
