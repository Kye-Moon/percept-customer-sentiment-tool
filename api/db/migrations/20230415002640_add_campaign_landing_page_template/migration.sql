-- CreateTable
CREATE TABLE "CampaignLandingPage" (
    "id" SERIAL NOT NULL,
    "campaignId" INTEGER NOT NULL,
    "campaignSlug" TEXT NOT NULL,
    "PageTitle" TEXT NOT NULL,
    "pageMessage" TEXT NOT NULL,
    "questionOne" TEXT NOT NULL,
    "questionTwo" TEXT NOT NULL,
    "questionThree" TEXT NOT NULL,
    "questionFour" TEXT NOT NULL,
    "LogoUrl" TEXT NOT NULL,
    "primaryColor" TEXT NOT NULL,
    "secondaryColor" TEXT NOT NULL,
    "textColor" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignLandingPage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CampaignLandingPage_campaignId_key" ON "CampaignLandingPage"("campaignId");

-- CreateIndex
CREATE UNIQUE INDEX "CampaignLandingPage_campaignSlug_key" ON "CampaignLandingPage"("campaignSlug");

-- AddForeignKey
ALTER TABLE "CampaignLandingPage" ADD CONSTRAINT "CampaignLandingPage_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
