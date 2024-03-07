/*
  Warnings:

  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[servicesId]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `age` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `post_body` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_gender` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "bdscActivity" TEXT[],
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "contact" TEXT,
ADD COLUMN     "disclaimer" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "physicalId" INTEGER,
ADD COLUMN     "pictures" TEXT[],
ADD COLUMN     "post_body" TEXT NOT NULL,
ADD COLUMN     "receive_call" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "service_gender" TEXT NOT NULL,
ADD COLUMN     "servicesId" INTEGER,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "visibleToGoogle" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "seeClient" TEXT NOT NULL,
    "working_hours" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "payment_methods" TEXT[],

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Physical" (
    "id" SERIAL NOT NULL,
    "ethnicity" TEXT[],
    "hair_color" TEXT NOT NULL,
    "tatoo" TEXT NOT NULL,

    CONSTRAINT "Physical_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Service_id_key" ON "Service"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Post_servicesId_key" ON "Post"("servicesId");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_servicesId_fkey" FOREIGN KEY ("servicesId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_physicalId_fkey" FOREIGN KEY ("physicalId") REFERENCES "Physical"("id") ON DELETE SET NULL ON UPDATE CASCADE;
