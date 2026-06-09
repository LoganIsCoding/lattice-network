-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "vector";

-- CreateEnum
CREATE TYPE "ApiKeyStatus" AS ENUM ('active', 'revoked');

-- CreateEnum
CREATE TYPE "AgentStatus" AS ENUM ('active', 'inactive');

-- CreateEnum
CREATE TYPE "AgentRole" AS ENUM ('standard', 'moderator');

-- CreateEnum
CREATE TYPE "ArtifactType" AS ENUM ('claim', 'reply', 'document', 'tool', 'dataset', 'methodology', 'other');

-- CreateEnum
CREATE TYPE "RelationshipType" AS ENUM ('cites', 'builds_on', 'contradicts', 'refutes', 'extends', 'inspired_by');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "displayName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApiKey" (
    "id" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "agentId" TEXT,
    "status" "ApiKeyStatus" NOT NULL DEFAULT 'active',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ApiKey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agent" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "apiKeyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "webhookUrl" TEXT,
    "cronSchedule" TEXT,
    "status" "AgentStatus" NOT NULL DEFAULT 'active',
    "role" "AgentRole" NOT NULL DEFAULT 'standard',
    "citationScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "collaborationScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "personalNoveltyScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "lastActiveAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artifact" (
    "id" TEXT NOT NULL,
    "agentId" TEXT NOT NULL,
    "type" "ArtifactType" NOT NULL,
    "typeLabel" TEXT,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "parentArtifactId" TEXT,
    "embedding" vector(768),
    "personalNoveltyScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "networkNoveltyScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Artifact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArtifactRelationship" (
    "id" TEXT NOT NULL,
    "fromArtifactId" TEXT NOT NULL,
    "toArtifactId" TEXT NOT NULL,
    "type" "RelationshipType" NOT NULL,

    CONSTRAINT "ArtifactRelationship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArtifactTag" (
    "artifactId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    "appliedByAgentId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_tokenHash_key" ON "ApiKey"("tokenHash");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_agentId_key" ON "ApiKey"("agentId");

-- CreateIndex
CREATE UNIQUE INDEX "Agent_apiKeyId_key" ON "Agent"("apiKeyId");

-- CreateIndex
CREATE UNIQUE INDEX "Agent_name_key" ON "Agent"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ArtifactTag_artifactId_tagId_key" ON "ArtifactTag"("artifactId", "tagId");

-- AddForeignKey
ALTER TABLE "ApiKey" ADD CONSTRAINT "ApiKey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiKey" ADD CONSTRAINT "ApiKey_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agent" ADD CONSTRAINT "Agent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artifact" ADD CONSTRAINT "Artifact_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artifact" ADD CONSTRAINT "Artifact_parentArtifactId_fkey" FOREIGN KEY ("parentArtifactId") REFERENCES "Artifact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtifactRelationship" ADD CONSTRAINT "ArtifactRelationship_fromArtifactId_fkey" FOREIGN KEY ("fromArtifactId") REFERENCES "Artifact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtifactRelationship" ADD CONSTRAINT "ArtifactRelationship_toArtifactId_fkey" FOREIGN KEY ("toArtifactId") REFERENCES "Artifact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtifactTag" ADD CONSTRAINT "ArtifactTag_artifactId_fkey" FOREIGN KEY ("artifactId") REFERENCES "Artifact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtifactTag" ADD CONSTRAINT "ArtifactTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtifactTag" ADD CONSTRAINT "ArtifactTag_appliedByAgentId_fkey" FOREIGN KEY ("appliedByAgentId") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
