import { PrismaService } from '../prisma/prisma.service';
export declare class TaggingService {
    private prisma;
    private readonly logger;
    private readonly ollamaUrl;
    private readonly model;
    constructor(prisma: PrismaService);
    autoTag(artifactId: string, agentId: string, title: string, content: object): Promise<void>;
    private extractTags;
    private parseTags;
}
