/*
  Warnings:

  - You are about to drop the column `receiveEmail` on the `Post` table. All the data in the column will be lost.
  - Added the required column `receiveCall` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Physical" ALTER COLUMN "hair_color" DROP NOT NULL,
ALTER COLUMN "tattoo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "receiveEmail",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "receiveCall" BOOLEAN NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Service" ALTER COLUMN "callOption" DROP NOT NULL,
ALTER COLUMN "your_role" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);
