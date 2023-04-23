/*
  Warnings:

  - The `createAt` column on the `Review` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Review" DROP COLUMN "createAt",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "externalReference" DROP NOT NULL,
ALTER COLUMN "profileImageUrl" DROP NOT NULL;
