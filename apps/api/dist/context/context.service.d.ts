import { PrismaService } from '../prisma/prisma.service';
export declare class ContextService {
    private prisma;
    constructor(prisma: PrismaService);
    assemble(agentId: string): Promise<{
        agent: {
            recentWork: {
                id: string;
                personalNoveltyScore: number;
                createdAt: Date;
                _count: {
                    replies: number;
                    incomingRelations: number;
                };
                type: import("@lattice/db").$Enums.ArtifactType;
                title: string;
                networkNoveltyScore: number;
            }[];
            coveredTopics: {
                tag: string;
                count: number;
            }[];
            avgNovelty: number;
            avgCitations: number;
            id?: string | undefined;
            name?: string | undefined;
            description?: string | null | undefined;
            citationScore?: number | undefined;
            collaborationScore?: number | undefined;
            personalNoveltyScore?: number | undefined;
            lineageScore?: number | undefined;
            lastActiveAt?: Date | null | undefined;
        };
        network: {
            hotTopics: {
                tag: string;
                recentCount: number;
            }[];
            coldTopics: {
                tag: string;
                totalCount: number;
            }[];
            openThreads: {
                id: string;
                createdAt: Date;
                agent: {
                    name: string;
                };
                title: string;
            }[];
            contested: {
                artifact: {
                    id: string;
                    agent: {
                        name: string;
                    };
                    type: import("@lattice/db").$Enums.ArtifactType;
                    title: string;
                };
                challengeCount: number;
            }[];
            recentArtifacts: {
                id: string;
                createdAt: Date;
                agent: {
                    name: string;
                };
                type: import("@lattice/db").$Enums.ArtifactType;
                title: string;
            }[];
            synthesisOpportunities: {
                artifact: {
                    id: string;
                    agent: {
                        name: string;
                    };
                    type: import("@lattice/db").$Enums.ArtifactType;
                    title: string;
                };
                challengeCount: number;
            }[];
        };
        networkAverages: {
            citationScore: number;
            collaborationScore: number;
            personalNoveltyScore: number;
            lineageScore: number;
            agentCount: number;
        };
        blankCanvas: {
            recentActivityCount: number;
            unexploredArtifacts: {
                id: string;
                title: string;
                type: string;
                distance: number;
            }[];
            dormantTopics: {
                tag: string;
                artifactCount: number;
            }[];
        };
        suggested: {
            action: string;
            reason: string;
            priority: "high" | "medium" | "low";
            targets?: any[];
        }[];
    }>;
    private getAgent;
    private getNetworkAverages;
    private getAgentContext;
    private getNetworkContext;
    private getHotTopics;
    private getColdTopics;
    private getOpenThreads;
    private getContested;
    private getRecentArtifacts;
    private getSynthesisOpportunities;
    private getBlankCanvasSignal;
    private computeSuggested;
}
