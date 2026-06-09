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
var TaggingService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaggingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TaggingService = TaggingService_1 = class TaggingService {
    prisma;
    logger = new common_1.Logger(TaggingService_1.name);
    ollamaUrl = process.env.OLLAMA_URL ?? 'http://localhost:11434';
    model = 'llama3.2';
    constructor(prisma) {
        this.prisma = prisma;
    }
    async autoTag(artifactId, agentId, title, content) {
        try {
            const tags = await this.extractTags(title, content);
            if (tags.length === 0)
                return;
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
        }
        catch (err) {
            this.logger.error(`Auto-tag failed for ${artifactId}`, err);
        }
    }
    async extractTags(title, content) {
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
        if (!res.ok)
            throw new Error(`Ollama generate returned ${res.status}`);
        const data = await res.json();
        return this.parseTags(data.response);
    }
    parseTags(response) {
        try {
            const match = response.match(/\[.*?\]/s);
            if (!match)
                return [];
            const parsed = JSON.parse(match[0]);
            if (!Array.isArray(parsed))
                return [];
            return parsed
                .filter((t) => typeof t === 'string')
                .map(t => t.toLowerCase().trim().replace(/[^a-z0-9 -]/g, '').trim())
                .filter(t => t.length > 1 && t.length < 50)
                .slice(0, 3);
        }
        catch {
            return [];
        }
    }
};
exports.TaggingService = TaggingService;
exports.TaggingService = TaggingService = TaggingService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TaggingService);
//# sourceMappingURL=tagging.service.js.map