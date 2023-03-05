/*
  Warnings:

  - You are about to drop the column `comapanyTwitterHandle` on the `CampaignIntegration` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CampaignIntegration" DROP COLUMN "comapanyTwitterHandle",
ADD COLUMN     "companyTwitterHandle" TEXT;
