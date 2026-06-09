import { ApiKeysService } from './api-keys.service';
export declare class ApiKeysController {
    private apiKeys;
    constructor(apiKeys: ApiKeysService);
    create(req: any): Promise<{
        id: string;
        token: string;
        createdAt: Date;
    }>;
    list(req: any): Promise<{
        id: string;
        createdAt: Date;
        status: import("@lattice/db").$Enums.ApiKeyStatus;
        agentId: string | null;
    }[]>;
    revoke(req: any, id: string): Promise<{
        ok: boolean;
    }>;
}
