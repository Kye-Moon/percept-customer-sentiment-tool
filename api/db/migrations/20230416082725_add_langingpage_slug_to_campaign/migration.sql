/*
  Warnings:

  - A unique constraint covering the columns `[landingPageSlug]` on the table `Campaign` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Campaign" ADD COLUMN     "landingPageSlug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Campaign_landingPageSlug_key" ON "Campaign"("landingPageSlug");
