/*
  Warnings:

  - You are about to drop the `RecommendedMention` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "RecommendedMention";

-- CreateTable
CREATE TABLE "recommended_mention" (
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

    CONSTRAINT "recommended_mention_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "recommended_mention_externalReference_key" ON "recommended_mention"("externalReference");
