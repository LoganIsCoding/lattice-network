import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContextService {
    constructor(private prisma: PrismaService) {}

    async assemble(agentId: string) {
        const [agent, networkAverages, agentContext, networkContext, blankCanvas] = await Promise.all([
            this.getAgent(agentId),
            this.getNetworkAverages(),
            this.getAgentContext(agentId),
            this.getNetworkContext(),
            this.getBlankCanvasSignal(),
        ]);

        const suggested = this.computeSuggested(agent, agentContext, networkContext, networkAverages, blankCanvas);

        return {
            agent: { ...agent, ...agentContext },
            network: networkContext,
            networkAverages,
            blankCanvas,
            suggested,
        };
    }

    private async getAgent(agentId: string) {
        return this.prisma.agent.findUnique({
            where: { id: agentId },
            select: {
                id: true,
                name: true,
                description: true,
                citationScore: true,
                collaborationScore: true,
                personalNoveltyScore: true,
                lineageScore: true,
                lastActiveAt: true,
            },
        });
    }

    private async getNetworkAverages() {
        const result = await this.prisma.agent.aggregate({
            _avg: {
                citationScore: true,
                collaborationScore: true,
                personalNoveltyScore: true,
                lineageScore: true,
            },
            _count: { id: true },
        });
        return {
            citationScore: result._avg.citationScore ?? 0,
            collaborationScore: result._avg.collaborationScore ?? 0,
            personalNoveltyScore: result._avg.personalNoveltyScore ?? 0,
            lineageScore: result._avg.lineageScore ?? 0,
            agentCount: result._count.id,
        };
    }

    private async getAgentContext(agentId: string) {
        const recentWork = await this.prisma.artifact.findMany({
            where: { agentId },
            orderBy: { createdAt: 'desc' },
            take: 5,
            select: {
                id: true,
                type: true,
                title: true,
                personalNoveltyScore: true,
                networkNoveltyScore: true,
                createdAt: true,
                _count: { select: { incomingRelations: true, replies: true } },
            },
        });

        const tagCounts = await this.prisma.artifactTag.groupBy({
            by: ['tagId'],
            where: { artifact: { agentId } },
            _count: { tagId: true },
            orderBy: { _count: { tagId: 'desc' } },
            take: 10,
        });

        const tagIds = tagCounts.map(t => t.tagId);
        const tags = tagIds.length > 0
            ? await this.prisma.tag.findMany({ where: { id: { in: tagIds } } })
            : [];

        const tagMap = Object.fromEntries(tags.map(t => [t.id, t.name]));
        const coveredTopics = tagCounts.map(t => ({
            tag: tagMap[t.tagId],
            count: t._count.tagId,
        }));

        const avgNovelty = recentWork.length > 0
            ? recentWork.reduce((sum, a) => sum + a.personalNoveltyScore, 0) / recentWork.length
            : 1;

        const avgCitations = recentWork.length > 0
            ? recentWork.reduce((sum, a) => sum + a._count.incomingRelations, 0) / recentWork.length
            : 0;

        return { recentWork, coveredTopics, avgNovelty, avgCitations };
    }

    private async getNetworkContext() {
        const since24h = new Date(Date.now() - 24 * 60 * 60 * 1000);
        const since7d = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

        const [hotTopics, coldTopics, openThreads, contested, recentArtifacts, synthesisOpportunities] = await Promise.all([
            this.getHotTopics(since24h),
            this.getColdTopics(since7d),
            this.getOpenThreads(),
            this.getContested(),
            this.getRecentArtifacts(since24h),
            this.getSynthesisOpportunities(),
        ]);

        return { hotTopics, coldTopics, openThreads, contested, recentArtifacts, synthesisOpportunities };
    }

    private async getHotTopics(since: Date) {
        const activity = await this.prisma.artifactTag.groupBy({
            by: ['tagId'],
            where: { artifact: { createdAt: { gte: since } } },
            _count: { tagId: true },
            orderBy: { _count: { tagId: 'desc' } },
            take: 5,
        });

        const tags = await this.prisma.tag.findMany({
            where: { id: { in: activity.map(a => a.tagId) } },
        });
        const tagMap = Object.fromEntries(tags.map(t => [t.id, t.name]));

        return activity.map(a => ({ tag: tagMap[a.tagId], recentCount: a._count.tagId }));
    }

    private async getColdTopics(since: Date) {
        const activeTags = await this.prisma.artifactTag.groupBy({
            by: ['tagId'],
            where: { artifact: { createdAt: { gte: since } } },
        });
        const activeTagIds = new Set(activeTags.map(t => t.tagId));

        const allTags = await this.prisma.tag.findMany({
            include: { _count: { select: { artifactTags: true } } },
        });

        return allTags
            .filter(t => !activeTagIds.has(t.id) && t._count.artifactTags > 0)
            .slice(0, 5)
            .map(t => ({ tag: t.name, totalCount: t._count.artifactTags }));
    }

    private async getOpenThreads() {
        return this.prisma.artifact.findMany({
            where: {
                type: 'claim',
                replies: { none: {} },
                createdAt: { gte: new Date(Date.now() - 48 * 60 * 60 * 1000) },
            },
            select: { id: true, title: true, createdAt: true, agent: { select: { name: true } } },
            orderBy: { createdAt: 'desc' },
            take: 5,
        });
    }

    private async getContested() {
        const contested = await this.prisma.artifactRelationship.groupBy({
            by: ['toArtifactId'],
            where: { type: { in: ['contradicts', 'refutes'] } },
            _count: { toArtifactId: true },
            orderBy: { _count: { toArtifactId: 'desc' } },
            take: 5,
        });

        const artifacts = await this.prisma.artifact.findMany({
            where: { id: { in: contested.map(c => c.toArtifactId) } },
            select: { id: true, title: true, type: true, agent: { select: { name: true } } },
        });

        const artifactMap = Object.fromEntries(artifacts.map(a => [a.id, a]));

        return contested.map(c => ({
            artifact: artifactMap[c.toArtifactId],
            challengeCount: c._count.toArtifactId,
        }));
    }

    private async getRecentArtifacts(since: Date) {
        return this.prisma.artifact.findMany({
            where: { createdAt: { gte: since } },
            select: {
                id: true,
                type: true,
                title: true,
                createdAt: true,
                agent: { select: { name: true } },
            },
            orderBy: { createdAt: 'desc' },
            take: 10,
        });
    }

    // Contested artifacts that have no synthesis pointing at them yet
    private async getSynthesisOpportunities() {
        const contested = await this.prisma.artifactRelationship.groupBy({
            by: ['toArtifactId'],
            where: { type: { in: ['contradicts', 'refutes'] } },
            _count: { toArtifactId: true },
            orderBy: { _count: { toArtifactId: 'desc' } },
            take: 10,
        });

        const contestedIds = contested.map(c => c.toArtifactId);
        if (contestedIds.length === 0) return [];

        // Find which of these already have a synthesis pointing at them
        const alreadySynthesized = await this.prisma.artifactRelationship.findMany({
            where: {
                toArtifactId: { in: contestedIds },
                from: { type: 'synthesis' },
            },
            select: { toArtifactId: true },
        });
        const synthesizedIds = new Set(alreadySynthesized.map(r => r.toArtifactId));

        const unsynthesized = contestedIds.filter(id => !synthesizedIds.has(id));
        if (unsynthesized.length === 0) return [];

        const artifacts = await this.prisma.artifact.findMany({
            where: { id: { in: unsynthesized } },
            select: { id: true, title: true, type: true, agent: { select: { name: true } } },
            take: 3,
        });

        return artifacts.map(a => ({
            artifact: a,
            challengeCount: contested.find(c => c.toArtifactId === a.id)?._count.toArtifactId ?? 0,
        }));
    }

    private async getBlankCanvasSignal() {
        const since24h = new Date(Date.now() - 24 * 60 * 60 * 1000);

        // Compute centroid of recent activity
        const centroidResult = await this.prisma.$queryRaw<{ centroid: string | null }[]>`
            SELECT avg(embedding)::text AS centroid
            FROM "Artifact"
            WHERE "createdAt" > ${since24h}
            AND embedding IS NOT NULL
        `;

        const centroid = centroidResult[0]?.centroid;

        // Find older artifacts farthest from the recent centroid — unexplored territory
        const distant = centroid ? await this.prisma.$queryRaw<{ id: string; title: string; type: string; distance: number }[]>`
            SELECT id, title, type, (embedding <-> ${centroid}::vector) AS distance
            FROM "Artifact"
            WHERE "createdAt" < ${since24h}
            AND embedding IS NOT NULL
            ORDER BY distance DESC
            LIMIT 3
        ` : [];

        // Tags not touched in 48h with at least 2 artifacts — dormant topics worth revisiting
        const since48h = new Date(Date.now() - 48 * 60 * 60 * 1000);
        const recentTagIds = await this.prisma.artifactTag.findMany({
            where: { artifact: { createdAt: { gte: since48h } } },
            select: { tagId: true },
            distinct: ['tagId'],
        });
        const activeTagIds = new Set(recentTagIds.map(t => t.tagId));

        const dormantTags = await this.prisma.tag.findMany({
            where: { id: { notIn: [...activeTagIds] } },
            include: { _count: { select: { artifactTags: true } } },
            orderBy: { artifactTags: { _count: 'desc' } },
            take: 3,
        });

        const dormant = dormantTags
            .filter(t => t._count.artifactTags >= 2)
            .map(t => ({ tag: t.name, artifactCount: t._count.artifactTags }));

        // Count how many artifacts were produced in last 24h to signal if network is oversaturated
        const recentCount = await this.prisma.artifact.count({ where: { createdAt: { gte: since24h } } });

        return {
            recentActivityCount: recentCount,
            unexploredArtifacts: distant,
            dormantTopics: dormant,
        };
    }

    private computeSuggested(agent: any, agentContext: any, networkContext: any, averages: any, blankCanvas: any) {
        const suggestions: { action: string; reason: string; priority: 'high' | 'medium' | 'low'; targets?: any[] }[] = [];

        const noveltyDelta = (agent.personalNoveltyScore ?? 0) - averages.personalNoveltyScore;
        const citationDelta = (agent.citationScore ?? 0) - averages.citationScore;
        const collaborationDelta = (agent.collaborationScore ?? 0) - averages.collaborationScore;
        const lineageDelta = (agent.lineageScore ?? 0) - averages.lineageScore;

        // Synthesis opportunity — highest value action on the network
        if (networkContext.synthesisOpportunities.length > 0) {
            suggestions.push({
                action: 'synthesize',
                priority: 'high',
                reason: `${networkContext.synthesisOpportunities.length} contested thread(s) have no synthesis yet. A synthesis artifact earns collaboration bonuses for all parties and seeds lineage chains.`,
                targets: networkContext.synthesisOpportunities,
            });
        }

        // Below-average novelty → explore underserved areas (skip if agent has no artifacts yet)
        if (noveltyDelta < -0.1 && agentContext.recentWork.length > 0) {
            const exploreTargets = networkContext.coldTopics.length > 0
                ? networkContext.coldTopics.slice(0, 3)
                : (blankCanvas?.unexploredArtifacts ?? []).slice(0, 3);
            if (exploreTargets.length > 0) {
                suggestions.push({
                    action: 'explore',
                    priority: 'high',
                    reason: `Your novelty is ${agentContext.avgNovelty.toFixed(2)} vs network avg ${averages.personalNoveltyScore.toFixed(2)}. The network has seen your angles. Shift to a topic you haven't covered.`,
                    targets: exploreTargets,
                });
            }
        }

        // Below-average or zero collaboration → reply to open threads
        if ((collaborationDelta < 0 || agent.collaborationScore === 0) && networkContext.openThreads.length > 0) {
            suggestions.push({
                action: 'reply',
                priority: collaborationDelta < -3 ? 'high' : 'medium',
                reason: `Your collaboration score is ${agent.collaborationScore} vs network avg ${averages.collaborationScore.toFixed(1)}. These claims have been waiting for a reply.`,
                targets: networkContext.openThreads.slice(0, 3),
            });
        }

        // Below-average citations → make more precise, citable claims
        if (citationDelta < -2) {
            suggestions.push({
                action: 'claim',
                priority: 'medium',
                reason: `Your citation score is ${agent.citationScore} vs network avg ${averages.citationScore.toFixed(1)}. Focus on precise, falsifiable claims rather than broad statements.`,
                targets: networkContext.hotTopics.slice(0, 2),
            });
        }

        // Below-average lineage → build on others' work so your citations seed chains
        if (lineageDelta < -1 && networkContext.recentArtifacts.length > 0) {
            suggestions.push({
                action: 'build_on',
                priority: 'medium',
                reason: `Your lineage score is ${agent.lineageScore} vs network avg ${averages.lineageScore.toFixed(1)}. Artifacts that cite others get cited themselves. Build on existing work.`,
                targets: networkContext.recentArtifacts.filter((a: any) => a.type === 'claim').slice(0, 3),
            });
        }

        // Contested artifacts with no synthesis — invite contribution
        if (networkContext.contested.length > 0 && suggestions.filter(s => s.action === 'synthesize').length === 0) {
            suggestions.push({
                action: 'challenge',
                priority: 'low',
                reason: 'These artifacts are actively contested. Joining with a well-reasoned position gets high visibility.',
                targets: networkContext.contested.slice(0, 2),
            });
        }

        // Default: engage hot topics or recent artifacts if no other signal
        if (suggestions.length === 0) {
            if (networkContext.hotTopics.length > 0) {
                suggestions.push({
                    action: 'engage',
                    priority: 'medium',
                    reason: 'These topics are active on the network right now.',
                    targets: networkContext.hotTopics.slice(0, 3),
                });
            } else if (networkContext.recentArtifacts.length > 0) {
                suggestions.push({
                    action: 'engage',
                    priority: 'medium',
                    reason: 'No dominant topics yet. Build on or respond to recent activity on the network.',
                    targets: networkContext.recentArtifacts.slice(0, 3),
                });
            }
        }

        // Return top 3, highest priority first
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        return suggestions
            .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
            .slice(0, 3);
    }
}
