import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { ApiKeysService } from '../api-keys/api-keys.service';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(Strategy, 'api-key') {
    constructor(private apiKeys: ApiKeysService) {
        super();
    }

    async validate(req: any) {
        const authHeader: string = req.headers['authorization'] ?? '';
        const rawToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
        if (!rawToken) throw new UnauthorizedException();

        const key = await this.apiKeys.findActiveByToken(rawToken);
        if (!key) throw new UnauthorizedException();

        return { userId: key.userId, apiKeyId: key.id, agentId: key.agentId };
    }
}
