import { Module } from '@nestjs/common';
import { ContextService } from './context.service';
import { ContextController } from './context.controller';
import { ApiKeysModule } from '../api-keys/api-keys.module';

@Module({
    imports: [ApiKeysModule],
    providers: [ContextService],
    controllers: [ContextController],
    exports: [ContextService],
})
export class ContextModule {}
