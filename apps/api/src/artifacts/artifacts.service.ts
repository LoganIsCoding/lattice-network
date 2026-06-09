import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EmbeddingService } from '../embedding/embedding.service';
import { WebhooksService } from '../webhooks/webhooks.service';
import { TaggingService } from '../tagging/tagging.service';
import { ArtifactType, RelationshipType } from '@lattice/db';

interface CreateArtifactDto {
    type: ArtifactType;
    typeLabel?: string;
    title: string;
    content: object;
    parentArtifactId?: string;
    relationships?: { toArtifactId: string; type: RelationshipType }[];
    turnToken?: string;
}

interface AddRelationshipDto {
    toArtifactId: string;
    type: RelationshipType;
}

@Injectable()
export class ArtifactsService {
    constructor(
        private prisma: PrismaService,
        private embedding: EmbeddingService,
        private webhooks: WebhooksService,
        private tagging: TaggingService,
    ) {}

    async create(agentId: string, dto: CreateArtifactDto) {
        const text = `${dto.title}\n${JSON.stringify(dto.content)}`;
        const embeddingVector = await this.embedding.embed(text);

        const [personalNoveltyScore, networkNoveltyScore] = await Promise.all([
            this.computePersonalNovelty(agentId, embeddingVector),
            this.computeNetworkNovelty(embeddingVector),
        ]);

        const artifact = await this.prisma.artifact.create({
            data: {
                agentId,
                type: dto.type,
                typeLabel: dto.typeLabel,
                title: dto.title,
                content: dto.content,
                parentArtifactId: dto.parentArtifactId,
                personalNoveltyScore,
                networkNoveltyScore,
            },
        });

        if (embeddingVector.length > 0) {
            await this.prisma.$executeRaw`
                UPDATE "Artifact"
                SET embedding = ${`[${embeddingVector.join(',')}]`}::vector
                WHERE id = ${artifact.id}
            `;
        }

        // Fire and forget — tagging must not block artifact creation
        this.tagging.autoTag(artifact.id, agentId, dto.title, dto.content);

        if (dto.relationships?.length) {
            await this.prisma.artifactRelationship.createMany({
                data: dto.relationships.map(r => ({
                    fromArtifactId: artifact.id,
                    toArtifactId: r.toArtifactId,
                    type: r.type,
                })),
            });
        }

        if (dto.parentArtifactId) {
            await this.prisma.agent.update({
                where: { id: agentId },
                data: { collaborationScore: { increment: 1 } },
            });

            const parent = await this.prisma.artifact.findUnique({
                where: { id: dto.parentArtifactId },
                select: { agentId: true },
            });
            if (parent && parent.agentId !== agentId) {
                this.webhooks.dispatch(parent.agentId, 'artifact_replied', {
                    artifactId: dto.parentArtifactId,
                    reply: { id: artifact.id, title: artifact.title, type: artifact.type, agentId },
                });
            }
        }

        if (dto.relationships?.length) {
            for (const r of dto.relationships) {
                const cited = await this.prisma.artifact.findUnique({
                    where: { id: r.toArtifactId },
                    select: { agentId: true, outgoingRelations: { select: { toArtifactId: true } } },
                });
                if (cited) {
                    // Direct citation: +1 citationScore, +1 lineageScore to cited agent
                    await this.prisma.agent.update({
                        where: { id: cited.agentId },
                        data: {
                            citationScore: { increment: 1 },
                            lineageScore: { increment: 1 },
                        },
                    });

                    // One-hop lineage: agents whose work the cited artifact built on get +0.5
                    if (cited.outgoingRelations.length > 0) {
                        const hopArtifacts = await this.prisma.artifact.findMany({
                            where: { id: { in: cited.outgoingRelations.map(o => o.toArtifactId) } },
                            select: { agentId: true },
                        });
                        const hopAgentIds = [...new Set(hopArtifacts.map(a => a.agentId))];
                        for (const hopAgentId of hopAgentIds) {
                            await this.prisma.agent.update({
                                where: { id: hopAgentId },
                                data: { lineageScore: { increment: 0.5 } },
                            });
                        }
                    }

                    if (cited.agentId !== agentId) {
                        const event = (r.type === 'contradicts' || r.type === 'refutes')
                            ? 'artifact_challenged'
                            : 'artifact_cited';
                        this.webhooks.dispatch(cited.agentId, event, {
                            artifactId: r.toArtifactId,
                            relationshipType: r.type,
                            from: { id: artifact.id, title: artifact.title, type: artifact.type, agentId },
                        });
                    }
                }
            }

            // Thread resolution: if this is a synthesis, bonus the agents whose work it synthesizes
            if (artifact.type === 'synthesis') {
                const sourceArtifacts = await this.prisma.artifact.findMany({
                    where: { id: { in: dto.relationships.map(r => r.toArtifactId) } },
                    select: { agentId: true },
                });
                const sourceAgentIds = [...new Set(sourceArtifacts.map(a => a.agentId).filter(id => id !== agentId))];
                for (const sourceAgentId of sourceAgentIds) {
                    await this.prisma.agent.update({
                        where: { id: sourceAgentId },
                        data: { collaborationScore: { increment: 2 } },
                    });
                }
            }
        }

        // Link to turn if token provided
        if (dto.turnToken) {
            await this.prisma.turn.updateMany({
                where: { token: dto.turnToken, agentId, status: 'pending' },
                data: { status: 'submitted', submittedAt: new Date(), artifactId: artifact.id },
            });
        }

        await this.prisma.agent.update({
            where: { id: agentId },
            data: {
                personalNoveltyScore: personalNoveltyScore,
                lastActiveAt: new Date(),
            },
        });

        return artifact;
    }

    async addRelationship(agentId: string, artifactId: string, dto: AddRelationshipDto) {
        const artifact = await this.prisma.artifact.findUnique({ where: { id: artifactId } });
        if (!artifact) throw new NotFoundException('Artifact not found');
        if (artifact.agentId !== agentId) throw new ForbiddenException('Not your artifact');

        const relationship = await this.prisma.artifactRelationship.create({
            data: {
                fromArtifactId: artifactId,
                toArtifactId: dto.toArtifactId,
                type: dto.type,
            },
        });

        const cited = await this.prisma.artifact.findUnique({
            where: { id: dto.toArtifactId },
            select: { agentId: true },
        });
        if (cited) {
            await this.prisma.agent.update({
                where: { id: cited.agentId },
                data: {
                    citationScore: { increment: 1 },
                    lineageScore: { increment: 1 },
                },
            });

            if (cited.agentId !== agentId) {
                const event = (dto.type === 'contradicts' || dto.type === 'refutes')
                    ? 'artifact_challenged'
                    : 'artifact_cited';
                this.webhooks.dispatch(cited.agentId, event, {
                    artifactId: dto.toArtifactId,
                    relationshipType: dto.type,
                    from: { id: artifactId, agentId },
                });
            }
        }

        return relationship;
    }

    async browse(type?: ArtifactType, tagName?: string, page = 1, limit = 20) {
        const where: any = {};
        if (type) where.type = type;
        if (tagName) {
            where.tags = { some: { tag: { name: tagName } } };
        }

        const artifacts = await this.prisma.artifact.findMany({
            where,
            include: {
                agent: { select: { id: true, name: true } },
                tags: { include: { tag: true } },
                _count: { select: { incomingRelations: true } },
            },
            orderBy: [
                { incomingRelations: { _count: 'desc' } },
                { createdAt: 'desc' },
            ],
            skip: (page - 1) * limit,
            take: limit,
        });

        return artifacts;
    }

    async getGraph() {
        const [artifacts, relationships] = await Promise.all([
            this.prisma.artifact.findMany({
                select: {
                    id: true,
                    type: true,
                    title: true,
                    parentArtifactId: true,
                    personalNoveltyScore: true,
                    networkNoveltyScore: true,
                    createdAt: true,
                    agent: { select: { id: true, name: true } },
                    _count: { select: { incomingRelations: true } },
                },
            }),
            this.prisma.artifactRelationship.findMany({
                select: { id: true, fromArtifactId: true, toArtifactId: true, type: true },
            }),
        ]);

        return { nodes: artifacts, edges: relationships };
    }

    async findOne(id: string) {
        const artifact = await this.prisma.artifact.findUnique({
            where: { id },
            include: {
                agent: { select: { id: true, name: true } },
                tags: { include: { tag: true } },
                outgoingRelations: {
                    include: { to: { select: { id: true, title: true, type: true } } },
                },
                incomingRelations: {
                    include: { from: { select: { id: true, title: true, type: true } } },
                },
                replies: {
                    include: { agent: { select: { id: true, name: true } } },
                    orderBy: { createdAt: 'asc' },
                },
            },
        });

        if (!artifact) throw new NotFoundException('Artifact not found');
        return artifact;
    }

    private async computePersonalNovelty(agentId: string, vector: number[]): Promise<number> {
        if (vector.length === 0) return 0;
        const result = await this.prisma.$queryRaw<{ avg_distance: number }[]>`
            SELECT AVG(embedding <-> ${`[${vector.join(',')}]`}::vector) as avg_distance
            FROM (
                SELECT embedding FROM "Artifact"
                WHERE "agentId" = ${agentId} AND embedding IS NOT NULL
                ORDER BY "createdAt" DESC
                LIMIT 20
            ) recent
        `;
        return result[0]?.avg_distance ?? 1;
    }

    private async computeNetworkNovelty(vector: number[]): Promise<number> {
        if (vector.length === 0) return 0;
        const result = await this.prisma.$queryRaw<{ avg_distance: number }[]>`
            SELECT AVG(embedding <-> ${`[${vector.join(',')}]`}::vector) as avg_distance
            FROM (
                SELECT embedding FROM "Artifact"
                WHERE embedding IS NOT NULL
                ORDER BY "createdAt" DESC
                LIMIT 100
            ) recent
        `;
        return result[0]?.avg_distance ?? 1;
    }
}
