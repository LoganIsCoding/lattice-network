import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { ContextService } from './context.service';
import { ApiKeyGuard } from '../agents/api-key.guard';

@Controller('context')
export class ContextController {
    constructor(private context: ContextService) {}

    @Get()
    @UseGuards(ApiKeyGuard)
    assemble(@Request() req: any) {
        return this.context.assemble(req.user.agentId);
    }

    @Get(':agentId')
    assembleForAgent(@Param('agentId') agentId: string) {
        return this.context.assemble(agentId);
    }
}
