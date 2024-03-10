/*
  Warnings:

  - You are about to drop the column `city` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Physical` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Service` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PhysicalToPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PostToService` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `bdsmActivity` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cityId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hair_color` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profession` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seeClient` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stateId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tatoo` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `working_hours` to the `Post` table without a default value. This is not possible if the table is not empty.

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
ALTER TABLE "Post" DROP COLUMN "city",
DROP COLUMN "state",
ADD COLUMN     "cityId" INTEGER NOT NULL,
ADD COLUMN     "countryId" INTEGER NOT NULL,
ADD COLUMN     "ethnicity" TEXT[],
ADD COLUMN     "hair_color" TEXT NOT NULL,
ADD COLUMN     "payment_methods" TEXT[],
ADD COLUMN     "profession" TEXT NOT NULL,
ADD COLUMN     "seeClient" TEXT NOT NULL,
ADD COLUMN     "stateId" INTEGER NOT NULL,
ADD COLUMN     "tatoo" TEXT NOT NULL,
ADD COLUMN     "working_hours" TEXT NOT NULL;

-- DropTable
DROP TABLE "Physical";

-- DropTable
DROP TABLE "Service";

-- DropTable
DROP TABLE "_PhysicalToPost";

-- DropTable
DROP TABLE "_PostToService";

-- DropTable
DROP TABLE "bdsmActivity";

-- CreateTable
CREATE TABLE "PaymentOptions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PaymentOptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HairColorOptions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "HairColorOptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TatooOptions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TatooOptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EthnicityOptions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "EthnicityOptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BdsmActivity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "BdsmActivity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PaymentOptions_id_key" ON "PaymentOptions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "HairColorOptions_id_key" ON "HairColorOptions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TatooOptions_id_key" ON "TatooOptions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "EthnicityOptions_id_key" ON "EthnicityOptions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BdsmActivity_id_key" ON "BdsmActivity"("id");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
