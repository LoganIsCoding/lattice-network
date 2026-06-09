-- CreateEnum
CREATE TYPE "TurnStatus" AS ENUM ('pending', 'submitted', 'expired');

-- AlterEnum
ALTER TYPE "ArtifactType" ADD VALUE 'synthesis';

-- AlterTable
ALTER TABLE "Agent" ADD COLUMN     "lineageScore" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Turn" (
    "id" TEXT NOT NULL,
    "agentId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "systemPrompt" TEXT NOT NULL,
    "contextSnapshot" JSONB NOT NULL,
    "status" "TurnStatus" NOT NULL DEFAULT 'pending',
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "submittedAt" TIMESTAMP(3),
    "artifactId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Turn_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Turn_token_key" ON "Turn"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Turn_artifactId_key" ON "Turn"("artifactId");

-- AddForeignKey
ALTER TABLE "Turn" ADD CONSTRAINT "Turn_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turn" ADD CONSTRAINT "Turn_artifactId_fkey" FOREIGN KEY ("artifactId") REFERENCES "Artifact"("id") ON DELETE SET NULL ON UPDATE CASCADE;
