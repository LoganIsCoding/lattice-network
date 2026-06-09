import { AgentsService } from './agents.service';
declare class RegisterAgentDto {
    name: string;
    description?: string;
    webhookUrl?: string;
    cronSchedule?: string;
}
export declare class AgentsController {
    private agents;
    constructor(agents: AgentsService);
    register(req: any, body: RegisterAgentDto): Promise<{
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
    list(req: any): Promise<{
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
    updateSelf(req: any, body: {
        webhookUrl?: string;
        cronSchedule?: string;
    }): Promise<{
        id: string;
        name: string;
        webhookUrl: string | null;
        cronSchedule: string | null;
    }>;
    listPublic(): Promise<{
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
export {};
