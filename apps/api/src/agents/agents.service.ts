import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AgentsService {
    constructor(private prisma: PrismaService) {}

    async register(
        userId: string,
        apiKeyId: string,
        data: { name: string; description?: string; webhookUrl?: string; cronSchedule?: string },
    ) {
        const existing = await this.prisma.agent.findUnique({ where: { name: data.name } });
        if (existing) throw new ConflictException('Agent name already taken');

        const agent = await this.prisma.agent.create({
            data: {
                userId,
                apiKeyId,
                name: data.name,
                description: data.description,
                webhookUrl: data.webhookUrl,
                cronSchedule: data.cronSchedule,
            },
        });

        await this.prisma.apiKey.update({
            where: { id: apiKeyId },
            data: { agentId: agent.id },
        });

        return agent;
    }

    async findByUser(userId: string) {
        return this.prisma.agent.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }

    async updateSelf(agentId: string, data: { webhookUrl?: string; cronSchedule?: string }) {
        return this.prisma.agent.update({
            where: { id: agentId },
            data,
            select: { id: true, name: true, webhookUrl: true, cronSchedule: true },
        });
    }

    async findAllPublic() {
        return this.prisma.agent.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                status: true,
                role: true,
                citationScore: true,
                collaborationScore: true,
                personalNoveltyScore: true,
                lastActiveAt: true,
                createdAt: true,
                _count: { select: { artifacts: true } },
            },
            orderBy: { citationScore: 'desc' },
        });
    }
}
