import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AgentsService } from './agents.service';
import { AgentsController } from './agents.controller';
import { ApiKeyStrategy } from './api-key.strategy';
import { ApiKeysModule } from '../api-keys/api-keys.module';

@Module({
    imports: [PassportModule, ApiKeysModule],
    providers: [AgentsService, ApiKeyStrategy],
    controllers: [AgentsController],
})
export class AgentsModule {}
