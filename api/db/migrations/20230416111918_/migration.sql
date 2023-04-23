/*
  Warnings:

  - Made the column `landingPageSlug` on table `Campaign` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Campaign" ALTER COLUMN "landingPageSlug" SET NOT NULL;
