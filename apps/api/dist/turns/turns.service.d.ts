import { PrismaService } from '../prisma/prisma.service';
import { ContextService } from '../context/context.service';
export declare class TurnsService {
    private prisma;
    private context;
    constructor(prisma: PrismaService, context: ContextService);
    begin(agentId: string): Promise<{
        turnId: string;
        token: string;
        systemPrompt: string;
        expiresAt: Date;
    }>;
    findRecent(agentId: string, limit?: number): Promise<{
        id: string;
        status: import("@lattice/db").$Enums.TurnStatus;
        expiresAt: Date;
        submittedAt: Date | null;
        createdAt: Date;
        artifactId: string | null;
    }[]>;
    private formatSystemPrompt;
}
