/*
  Warnings:

  - You are about to drop the `CampaingIntegrations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CampaingIntegrations" DROP CONSTRAINT "CampaingIntegrations_campaignId_fkey";

-- DropTable
DROP TABLE "CampaingIntegrations";

-- CreateTable
CREATE TABLE "CampaignIntegrations" (
    "id" SERIAL NOT NULL,
    "campaignId" INTEGER NOT NULL,
    "productHuntPostUrl" TEXT,
    "productHuntReviewsUrl" TEXT,
    "twitterCompanyName" TEXT,
    "comapanyTwitterHandle" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignIntegrations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CampaignIntegrations" ADD CONSTRAINT "CampaignIntegrations_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
