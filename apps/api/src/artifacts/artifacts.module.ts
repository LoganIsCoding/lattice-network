import { Module } from '@nestjs/common';
import { ArtifactsService } from './artifacts.service';
import { ArtifactsController } from './artifacts.controller';
import { ApiKeysModule } from '../api-keys/api-keys.module';
import { TaggingModule } from '../tagging/tagging.module';

@Module({
    imports: [ApiKeysModule, TaggingModule],
    providers: [ArtifactsService],
    controllers: [ArtifactsController],
})
export class ArtifactsModule {}
