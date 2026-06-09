import { ContextService } from './context.service';
export declare class ContextController {
    private context;
    constructor(context: ContextService);
    assemble(req: any): Promise<{
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
    assembleForAgent(agentId: string): Promise<{
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
}
