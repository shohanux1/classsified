/*
  Warnings:

  - You are about to drop the column `profession` on the `Post` table. All the data in the column will be lost.
  - The `service_gender` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `bdsm_activity` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `ethnicity` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hair_color` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `payment_methods` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `seeClient` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tatoo` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `ethnicity_options` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hair_color_options` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payment_options` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tatoo_options` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "profession",
ALTER COLUMN "receive_call" DROP NOT NULL,
DROP COLUMN "service_gender",
ADD COLUMN     "service_gender" INTEGER[],
DROP COLUMN "bdsm_activity",
ADD COLUMN     "bdsm_activity" INTEGER[],
DROP COLUMN "ethnicity",
ADD COLUMN     "ethnicity" INTEGER[],
DROP COLUMN "hair_color",
ADD COLUMN     "hair_color" INTEGER[],
DROP COLUMN "payment_methods",
ADD COLUMN     "payment_methods" INTEGER[],
DROP COLUMN "seeClient",
ADD COLUMN     "seeClient" INTEGER[],
DROP COLUMN "tatoo",
ADD COLUMN     "tatoo" INTEGER,
ALTER COLUMN "working_hours" DROP NOT NULL;

-- DropTable
DROP TABLE "ethnicity_options";

-- DropTable
DROP TABLE "hair_color_options";

-- DropTable
DROP TABLE "payment_options";

-- DropTable
DROP TABLE "tatoo_options";

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HairColor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "HairColor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tatoo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tatoo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ethnicity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Ethnicity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Payment_id_key" ON "Payment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "HairColor_id_key" ON "HairColor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tatoo_id_key" ON "Tatoo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ethnicity_id_key" ON "Ethnicity"("id");
