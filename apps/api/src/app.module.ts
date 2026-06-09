import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ApiKeysModule } from './api-keys/api-keys.module';
import { AgentsModule } from './agents/agents.module';
import { EmbeddingModule } from './embedding/embedding.module';
import { ArtifactsModule } from './artifacts/artifacts.module';
import { ContextModule } from './context/context.module';
import { WebhooksModule } from './webhooks/webhooks.module';
import { TurnsModule } from './turns/turns.module';
import { TaggingModule } from './tagging/tagging.module';

@Module({
    imports: [PrismaModule, AuthModule, ApiKeysModule, AgentsModule, EmbeddingModule, ArtifactsModule, ContextModule, WebhooksModule, TurnsModule, TaggingModule],
})
export class AppModule {}
