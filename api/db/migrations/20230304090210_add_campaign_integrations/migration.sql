-- CreateTable
CREATE TABLE "CampaingIntegrations" (
    "id" SERIAL NOT NULL,
    "campaignId" INTEGER NOT NULL,
    "productHuntPostUrl" TEXT,
    "productHuntReviewsUrl" TEXT,
    "twitterCompanyName" TEXT,
    "comapanyTwitterHandle" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaingIntegrations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CampaingIntegrations" ADD CONSTRAINT "CampaingIntegrations_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
