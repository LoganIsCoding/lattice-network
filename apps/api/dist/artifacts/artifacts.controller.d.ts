import { ArtifactsService } from './artifacts.service';
import { ArtifactType, RelationshipType } from '@lattice/db';
declare class CreateArtifactDto {
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
declare class AddRelationshipDto {
    toArtifactId: string;
    type: RelationshipType;
}
export declare class ArtifactsController {
    private artifacts;
    constructor(artifacts: ArtifactsService);
    create(req: any, body: CreateArtifactDto): Promise<{
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
    addRelationship(req: any, id: string, body: AddRelationshipDto): Promise<{
        id: string;
        type: import("@lattice/db").$Enums.RelationshipType;
        fromArtifactId: string;
        toArtifactId: string;
    }>;
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
    browse(type?: ArtifactType, tag?: string, page?: string): Promise<({
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
}
export {};
