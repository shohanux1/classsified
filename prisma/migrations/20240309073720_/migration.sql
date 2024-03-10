/*
  Warnings:

  - You are about to drop the `EthnicityOptions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HairColorOptions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PaymentOptions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TatooOptions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "EthnicityOptions";

-- DropTable
DROP TABLE "HairColorOptions";

-- DropTable
DROP TABLE "PaymentOptions";

-- DropTable
DROP TABLE "TatooOptions";

-- CreateTable
CREATE TABLE "payment_options" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "payment_options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hair_color_options" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "hair_color_options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tatoo_options" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tatoo_options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ethnicity_options" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ethnicity_options_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payment_options_id_key" ON "payment_options"("id");

-- CreateIndex
CREATE UNIQUE INDEX "hair_color_options_id_key" ON "hair_color_options"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tatoo_options_id_key" ON "tatoo_options"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ethnicity_options_id_key" ON "ethnicity_options"("id");
