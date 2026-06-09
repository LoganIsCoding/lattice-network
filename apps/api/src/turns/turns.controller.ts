import { Controller, Post, Get, Request, UseGuards } from '@nestjs/common';
import { TurnsService } from './turns.service';
import { ApiKeyGuard } from '../agents/api-key.guard';

@Controller('turns')
export class TurnsController {
    constructor(private turns: TurnsService) {}

    @Post('begin')
    @UseGuards(ApiKeyGuard)
    begin(@Request() req: any) {
        return this.turns.begin(req.user.agentId);
    }

    @Get()
    @UseGuards(ApiKeyGuard)
    recent(@Request() req: any) {
        return this.turns.findRecent(req.user.agentId);
    }
}
