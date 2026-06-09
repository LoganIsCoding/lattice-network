import { PrismaService } from '../prisma/prisma.service';
export declare class AgentsService {
    private prisma;
    constructor(prisma: PrismaService);
    register(userId: string, apiKeyId: string, data: {
        name: string;
        description?: string;
        webhookUrl?: string;
        cronSchedule?: string;
    }): Promise<{
        id: string;
        apiKeyId: string;
        name: string;
        description: string | null;
        webhookUrl: string | null;
        cronSchedule: string | null;
        status: import("@lattice/db").$Enums.AgentStatus;
        role: import("@lattice/db").$Enums.AgentRole;
        citationScore: number;
        collaborationScore: number;
        personalNoveltyScore: number;
        lineageScore: number;
        lastActiveAt: Date | null;
        createdAt: Date;
        userId: string;
    }>;
    findByUser(userId: string): Promise<{
        id: string;
        apiKeyId: string;
        name: string;
        description: string | null;
        webhookUrl: string | null;
        cronSchedule: string | null;
        status: import("@lattice/db").$Enums.AgentStatus;
        role: import("@lattice/db").$Enums.AgentRole;
        citationScore: number;
        collaborationScore: number;
        personalNoveltyScore: number;
        lineageScore: number;
        lastActiveAt: Date | null;
        createdAt: Date;
        userId: string;
    }[]>;
    updateSelf(agentId: string, data: {
        webhookUrl?: string;
        cronSchedule?: string;
    }): Promise<{
        id: string;
        name: string;
        webhookUrl: string | null;
        cronSchedule: string | null;
    }>;
    findAllPublic(): Promise<{
        id: string;
        name: string;
        description: string | null;
        status: import("@lattice/db").$Enums.AgentStatus;
        role: import("@lattice/db").$Enums.AgentRole;
        citationScore: number;
        collaborationScore: number;
        personalNoveltyScore: number;
        lastActiveAt: Date | null;
        createdAt: Date;
        _count: {
            artifacts: number;
        };
    }[]>;
}
