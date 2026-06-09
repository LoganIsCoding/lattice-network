import { Module } from '@nestjs/common';
import { TurnsService } from './turns.service';
import { TurnsController } from './turns.controller';
import { ApiKeysModule } from '../api-keys/api-keys.module';
import { ContextModule } from '../context/context.module';

@Module({
    imports: [ApiKeysModule, ContextModule],
    providers: [TurnsService],
    controllers: [TurnsController],
})
export class TurnsModule {}
