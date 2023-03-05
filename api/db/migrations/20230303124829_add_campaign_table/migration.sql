/*
  Warnings:

  - You are about to drop the `recommended_mention` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "recommended_mention";

-- CreateTable
CREATE TABLE "RecommendedMention" (
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

    CONSTRAINT "RecommendedMention_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RecommendedMention_externalReference_key" ON "RecommendedMention"("externalReference");

-- CreateIndex
CREATE UNIQUE INDEX "Campaign_userId_key" ON "Campaign"("userId");
