import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ApiKeysService {
    constructor(private prisma: PrismaService) {}

    async create(userId: string) {
        const rawToken = `lk_${crypto.randomBytes(32).toString('hex')}`;
        const tokenHash = await bcrypt.hash(rawToken, 12);

        const apiKey = await this.prisma.apiKey.create({
            data: { userId, tokenHash },
        });

        return { id: apiKey.id, token: rawToken, createdAt: apiKey.createdAt };
    }

    async list(userId: string) {
        return this.prisma.apiKey.findMany({
            where: { userId },
            select: { id: true, status: true, agentId: true, createdAt: true },
            orderBy: { createdAt: 'desc' },
        });
    }

    async revoke(userId: string, keyId: string) {
        await this.prisma.apiKey.updateMany({
            where: { id: keyId, userId },
            data: { status: 'revoked' },
        });
        return { ok: true };
    }

    async findByToken(rawToken: string) {
        const keys = await this.prisma.apiKey.findMany({
            where: { status: 'active', agentId: null },
        });

        for (const key of keys) {
            const match = await bcrypt.compare(rawToken, key.tokenHash);
            if (match) return key;
        }
        return null;
    }

    async findActiveByToken(rawToken: string) {
        const keys = await this.prisma.apiKey.findMany({
            where: { status: 'active' },
        });

        for (const key of keys) {
            const match = await bcrypt.compare(rawToken, key.tokenHash);
            if (match) return key;
        }
        return null;
    }
}
