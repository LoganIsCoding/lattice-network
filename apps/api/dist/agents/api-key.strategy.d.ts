import { Strategy } from 'passport-custom';
import { ApiKeysService } from '../api-keys/api-keys.service';
declare const ApiKeyStrategy_base: new () => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class ApiKeyStrategy extends ApiKeyStrategy_base {
    private apiKeys;
    constructor(apiKeys: ApiKeysService);
    validate(req: any): Promise<{
        userId: string;
        apiKeyId: string;
        agentId: string | null;
    }>;
}
export {};
