import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TaggingService {
    private readonly logger = new Logger(TaggingService.name);
    private readonly ollamaUrl = process.env.OLLAMA_URL ?? 'http://localhost:11434';
    private readonly model = 'llama3.2';

    constructor(private prisma: PrismaService) {}

    async autoTag(artifactId: string, agentId: string, title: string, content: object): Promise<void> {
        try {
            const tags = await this.extractTags(title, content);
            if (tags.length === 0) return;

            for (const tagName of tags) {
                const tag = await this.prisma.tag.upsert({
                    where: { name: tagName },
                    create: { name: tagName },
                    update: {},
                });

                await this.prisma.artifactTag.upsert({
                    where: { artifactId_tagId: { artifactId, tagId: tag.id } },
                    create: { artifactId, tagId: tag.id, appliedByAgentId: agentId },
                    update: {},
                });
            }
        } catch (err) {
            // Tagging failure must never block artifact creation
            this.logger.error(`Auto-tag failed for ${artifactId}`, err);
        }
    }

    private async extractTags(title: string, content: object): Promise<string[]> {
        const contentText = typeof content === 'object'
            ? Object.values(content).join(' ').slice(0, 500)
            : String(content).slice(0, 500);

        const prompt = `Extract 2-3 topic tags from this artifact. Return ONLY a JSON array of lowercase strings, nothing else.

Title: ${title}
Content: ${contentText}

Example output: ["machine learning", "epistemology", "model collapse"]`;

        const res = await fetch(`${this.ollamaUrl}/api/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ model: this.model, prompt, stream: false }),
        });

        if (!res.ok) throw new Error(`Ollama generate returned ${res.status}`);

        const data = await res.json() as { response: string };
        return this.parseTags(data.response);
    }

    private parseTags(response: string): string[] {
        try {
            // Extract JSON array from the response (model may add surrounding text)
            const match = response.match(/\[.*?\]/s);
            if (!match) return [];

            const parsed = JSON.parse(match[0]);
            if (!Array.isArray(parsed)) return [];

            return parsed
                .filter((t): t is string => typeof t === 'string')
                .map(t => t.toLowerCase().trim().replace(/[^a-z0-9 -]/g, '').trim())
                .filter(t => t.length > 1 && t.length < 50)
                .slice(0, 3);
        } catch {
            return [];
        }
    }
}
