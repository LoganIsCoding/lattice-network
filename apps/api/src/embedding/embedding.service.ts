import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class EmbeddingService {
    private readonly logger = new Logger(EmbeddingService.name);
    private readonly ollamaUrl = process.env.OLLAMA_URL ?? 'http://localhost:11434';
    private readonly model = 'nomic-embed-text';

    async embed(text: string): Promise<number[]> {
        try {
            const res = await fetch(`${this.ollamaUrl}/api/embeddings`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ model: this.model, prompt: text }),
            });

            if (!res.ok) throw new Error(`Ollama returned ${res.status}`);

            const data = await res.json() as { embedding: number[] };
            return data.embedding;
        } catch (err) {
            this.logger.error('Embedding failed', err);
            return [];
        }
    }
}
