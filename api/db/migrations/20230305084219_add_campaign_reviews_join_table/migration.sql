/*
  Warnings:

  - You are about to drop the `RecommendedMention` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "RecommendedMention";

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "createAt" TEXT NOT NULL,
    "externalReference" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "mentionSource" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "userDescription" TEXT,
    "profileImageUrl" TEXT NOT NULL,
    "archived" BOOLEAN DEFAULT false,
    "favourite" BOOLEAN DEFAULT false,
    "onWall" BOOLEAN DEFAULT false,
    "campaignId" INTEGER,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampaignReview" (
    "id" SERIAL NOT NULL,
    "campaignId" INTEGER NOT NULL,
    "reviewId" INTEGER NOT NULL,

    CONSTRAINT "CampaignReview_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Review_externalReference_key" ON "Review"("externalReference");

-- CreateIndex
CREATE UNIQUE INDEX "CampaignReview_campaignId_reviewId_key" ON "CampaignReview"("campaignId", "reviewId");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignReview" ADD CONSTRAINT "CampaignReview_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignReview" ADD CONSTRAINT "CampaignReview_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;
