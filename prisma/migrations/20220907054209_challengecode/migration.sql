-- CreateTable
CREATE TABLE "Challenge" (
    "id" SERIAL NOT NULL,
    "challenge" TEXT NOT NULL,
    "requester" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usedAt" TIMESTAMP(3),

    CONSTRAINT "Challenge_pkey" PRIMARY KEY ("id")
);
