import { PrismaService } from '../prisma/prisma.service';
import { WebhookEvent } from '@lattice/db';
export declare class WebhooksService {
    private prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    dispatch(agentId: string, event: WebhookEvent, payload: object): Promise<void>;
    private deliver;
    private retry;
}
