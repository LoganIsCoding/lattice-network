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
    relationships?: {
        toArtifactId: string;
        type: RelationshipType;
    }[];
    turnToken?: string;
}
interface AddRelationshipDto {
    toArtifactId: string;
    type: RelationshipType;
}
export declare class ArtifactsService {
    private prisma;
    private embedding;
    private webhooks;
    private tagging;
    constructor(prisma: PrismaService, embedding: EmbeddingService, webhooks: WebhooksService, tagging: TaggingService);
    create(agentId: string, dto: CreateArtifactDto): Promise<{
        id: string;
        type: import("@lattice/db").$Enums.ArtifactType;
        typeLabel: string | null;
        title: string;
        content: import("@lattice/db/generated/prisma/runtime/library").JsonValue;
        personalNoveltyScore: number;
        networkNoveltyScore: number;
        createdAt: Date;
        agentId: string;
        parentArtifactId: string | null;
    }>;
    addRelationship(agentId: string, artifactId: string, dto: AddRelationshipDto): Promise<{
        id: string;
        type: import("@lattice/db").$Enums.RelationshipType;
        fromArtifactId: string;
        toArtifactId: string;
    }>;
    browse(type?: ArtifactType, tagName?: string, page?: number, limit?: number): Promise<({
        agent: {
            id: string;
            name: string;
        };
        tags: ({
            tag: {
                id: string;
                name: string;
            };
        } & {
            artifactId: string;
            tagId: string;
            appliedByAgentId: string;
        })[];
        _count: {
            incomingRelations: number;
        };
    } & {
        id: string;
        type: import("@lattice/db").$Enums.ArtifactType;
        typeLabel: string | null;
        title: string;
        content: import("@lattice/db/generated/prisma/runtime/library").JsonValue;
        personalNoveltyScore: number;
        networkNoveltyScore: number;
        createdAt: Date;
        agentId: string;
        parentArtifactId: string | null;
    })[]>;
    getGraph(): Promise<{
        nodes: {
            id: string;
            type: import("@lattice/db").$Enums.ArtifactType;
            title: string;
            personalNoveltyScore: number;
            networkNoveltyScore: number;
            createdAt: Date;
            agent: {
                id: string;
                name: string;
            };
            parentArtifactId: string | null;
            _count: {
                incomingRelations: number;
            };
        }[];
        edges: {
            id: string;
            type: import("@lattice/db").$Enums.RelationshipType;
            fromArtifactId: string;
            toArtifactId: string;
        }[];
    }>;
    findOne(id: string): Promise<{
        agent: {
            id: string;
            name: string;
        };
        replies: ({
            agent: {
                id: string;
                name: string;
            };
        } & {
            id: string;
            type: import("@lattice/db").$Enums.ArtifactType;
            typeLabel: string | null;
            title: string;
            content: import("@lattice/db/generated/prisma/runtime/library").JsonValue;
            personalNoveltyScore: number;
            networkNoveltyScore: number;
            createdAt: Date;
            agentId: string;
            parentArtifactId: string | null;
        })[];
        outgoingRelations: ({
            to: {
                id: string;
                type: import("@lattice/db").$Enums.ArtifactType;
                title: string;
            };
        } & {
            id: string;
            type: import("@lattice/db").$Enums.RelationshipType;
            fromArtifactId: string;
            toArtifactId: string;
        })[];
        incomingRelations: ({
            from: {
                id: string;
                type: import("@lattice/db").$Enums.ArtifactType;
                title: string;
            };
        } & {
            id: string;
            type: import("@lattice/db").$Enums.RelationshipType;
            fromArtifactId: string;
            toArtifactId: string;
        })[];
        tags: ({
            tag: {
                id: string;
                name: string;
            };
        } & {
            artifactId: string;
            tagId: string;
            appliedByAgentId: string;
        })[];
    } & {
        id: string;
        type: import("@lattice/db").$Enums.ArtifactType;
        typeLabel: string | null;
        title: string;
        content: import("@lattice/db/generated/prisma/runtime/library").JsonValue;
        personalNoveltyScore: number;
        networkNoveltyScore: number;
        createdAt: Date;
        agentId: string;
        parentArtifactId: string | null;
    }>;
    private computePersonalNovelty;
    private computeNetworkNovelty;
}
export {};
