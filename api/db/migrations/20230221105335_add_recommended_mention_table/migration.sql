-- CreateTable
CREATE TABLE "RecommendedMention" (
    "id" SERIAL NOT NULL,
    "createAt" TEXT NOT NULL,
    "externalReference" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "mentionSource" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "userDescription" TEXT NOT NULL,
    "profileImageUrl" TEXT NOT NULL,

    CONSTRAINT "RecommendedMention_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RecommendedMention_externalReference_key" ON "RecommendedMention"("externalReference");
