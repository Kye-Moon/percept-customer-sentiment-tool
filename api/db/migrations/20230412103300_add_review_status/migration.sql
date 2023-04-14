/*
  Warnings:

  - You are about to drop the column `archived` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `favourite` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `onWall` on the `Review` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ReviewStatus" AS ENUM ('NEW', 'RECCOMENDED', 'ARCHIVED', 'FAVORITE', 'ACTIVE');

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "archived",
DROP COLUMN "favourite",
DROP COLUMN "onWall",
ADD COLUMN     "status" "ReviewStatus" NOT NULL DEFAULT 'NEW';
