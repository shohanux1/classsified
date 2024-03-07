/*
  Warnings:

  - You are about to drop the `_PhysicalToPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PostToService` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PhysicalToPost" DROP CONSTRAINT "_PhysicalToPost_A_fkey";

-- DropForeignKey
ALTER TABLE "_PhysicalToPost" DROP CONSTRAINT "_PhysicalToPost_B_fkey";

-- DropForeignKey
ALTER TABLE "_PostToService" DROP CONSTRAINT "_PostToService_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostToService" DROP CONSTRAINT "_PostToService_B_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "physicalId" INTEGER,
ADD COLUMN     "serviceId" INTEGER;

-- DropTable
DROP TABLE "_PhysicalToPost";

-- DropTable
DROP TABLE "_PostToService";

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_physicalId_fkey" FOREIGN KEY ("physicalId") REFERENCES "Physical"("id") ON DELETE SET NULL ON UPDATE CASCADE;
