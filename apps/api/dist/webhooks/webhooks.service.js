"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var WebhooksService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let WebhooksService = WebhooksService_1 = class WebhooksService {
    prisma;
    logger = new common_1.Logger(WebhooksService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async dispatch(agentId, event, payload) {
        const agent = await this.prisma.agent.findUnique({
            where: { id: agentId },
            select: { webhookUrl: true },
        });
        if (!agent?.webhookUrl)
            return;
        const delivery = await this.prisma.webhookDelivery.create({
            data: { agentId, event, payload },
        });
        await this.deliver(delivery.id, agent.webhookUrl, event, payload);
    }
    async deliver(deliveryId, url, event, payload) {
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
            }
            else {
                throw new Error(`HTTP ${res.status}`);
            }
        }
        catch (err) {
            this.logger.warn(`Webhook delivery ${deliveryId} failed: ${err.message}. Retrying in 60s.`);
            await this.prisma.webhookDelivery.update({
                where: { id: deliveryId },
                data: { status: 'failed' },
            });
            setTimeout(() => this.retry(deliveryId, url, event, payload), 60_000);
        }
    }
    async retry(deliveryId, url, event, payload) {
        const delivery = await this.prisma.webhookDelivery.findUnique({
            where: { id: deliveryId },
            select: { attempts: true, status: true },
        });
        if (!delivery || delivery.status === 'delivered' || delivery.attempts >= 3)
            return;
        this.logger.log(`Retrying webhook delivery ${deliveryId} (attempt ${delivery.attempts + 1})`);
        await this.deliver(deliveryId, url, event, payload);
    }
};
exports.WebhooksService = WebhooksService;
exports.WebhooksService = WebhooksService = WebhooksService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], WebhooksService);
//# sourceMappingURL=webhooks.service.js.map