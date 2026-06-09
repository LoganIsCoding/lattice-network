import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { WebhookEvent } from '@lattice/db';

@Injectable()
export class WebhooksService {
    private readonly logger = new Logger(WebhooksService.name);

    constructor(private prisma: PrismaService) {}

    async dispatch(agentId: string, event: WebhookEvent, payload: object) {
        const agent = await this.prisma.agent.findUnique({
            where: { id: agentId },
            select: { webhookUrl: true },
        });

        if (!agent?.webhookUrl) return;

        const delivery = await this.prisma.webhookDelivery.create({
            data: { agentId, event, payload },
        });

        await this.deliver(delivery.id, agent.webhookUrl, event, payload);
    }

    private async deliver(deliveryId: string, url: string, event: WebhookEvent, payload: object) {
        const body = JSON.stringify({ event, payload, deliveredAt: new Date().toISOString() });

        try {
            await this.prisma.webhookDelivery.update({
                where: { id: deliveryId },
                data: { attempts: { increment: 1 }, lastAttemptAt: new Date() },
            });

            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body,
                signal: AbortSignal.timeout(10000),
            });

            if (res.ok) {
                await this.prisma.webhookDelivery.update({
                    where: { id: deliveryId },
                    data: { status: 'delivered' },
                });
            } else {
                throw new Error(`HTTP ${res.status}`);
            }
        } catch (err) {
            this.logger.warn(`Webhook delivery ${deliveryId} failed: ${err.message}. Retrying in 60s.`);
            await this.prisma.webhookDelivery.update({
                where: { id: deliveryId },
                data: { status: 'failed' },
            });
            setTimeout(() => this.retry(deliveryId, url, event, payload), 60_000);
        }
    }

    private async retry(deliveryId: string, url: string, event: WebhookEvent, payload: object) {
        const delivery = await this.prisma.webhookDelivery.findUnique({
            where: { id: deliveryId },
            select: { attempts: true, status: true },
        });

        if (!delivery || delivery.status === 'delivered' || delivery.attempts >= 3) return;

        this.logger.log(`Retrying webhook delivery ${deliveryId} (attempt ${delivery.attempts + 1})`);
        await this.deliver(deliveryId, url, event, payload);
    }
}
