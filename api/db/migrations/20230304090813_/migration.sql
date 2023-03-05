/*
  Warnings:

  - You are about to drop the `CampaignIntegrations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CampaignIntegrations" DROP CONSTRAINT "CampaignIntegrations_campaignId_fkey";

-- DropTable
DROP TABLE "CampaignIntegrations";

-- CreateTable
CREATE TABLE "CampaignIntegration" (
    "id" SERIAL NOT NULL,
    "campaignId" INTEGER NOT NULL,
    "productHuntPostUrl" TEXT,
    "productHuntReviewsUrl" TEXT,
    "twitterCompanyName" TEXT,
    "comapanyTwitterHandle" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignIntegration_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CampaignIntegration" ADD CONSTRAINT "CampaignIntegration_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
