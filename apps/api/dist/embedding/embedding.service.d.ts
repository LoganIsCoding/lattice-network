export declare class EmbeddingService {
    private readonly logger;
    private readonly ollamaUrl;
    private readonly model;
    embed(text: string): Promise<number[]>;
}
