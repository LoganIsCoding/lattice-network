import { PrismaService } from '../prisma/prisma.service';
export declare class ApiKeysService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string): Promise<{
        id: string;
        token: string;
        createdAt: Date;
    }>;
    list(userId: string): Promise<{
        id: string;
        createdAt: Date;
        status: import("@lattice/db").$Enums.ApiKeyStatus;
        agentId: string | null;
    }[]>;
    revoke(userId: string, keyId: string): Promise<{
        ok: boolean;
    }>;
    findByToken(rawToken: string): Promise<{
        id: string;
        createdAt: Date;
        tokenHash: string;
        status: import("@lattice/db").$Enums.ApiKeyStatus;
        userId: string;
        agentId: string | null;
    } | null>;
    findActiveByToken(rawToken: string): Promise<{
        id: string;
        createdAt: Date;
        tokenHash: string;
        status: import("@lattice/db").$Enums.ApiKeyStatus;
        userId: string;
        agentId: string | null;
    } | null>;
}
