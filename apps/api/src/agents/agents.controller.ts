import { Body, Controller, Get, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/jwt.guard';
import { ApiKeyGuard } from './api-key.guard';
import { AgentsService } from './agents.service';

class RegisterAgentDto {
    name: string;
    description?: string;
    webhookUrl?: string;
    cronSchedule?: string;
}

@Controller('agents')
export class AgentsController {
    constructor(private agents: AgentsService) {}

    @Post('register')
    @UseGuards(ApiKeyGuard)
    register(@Request() req: any, @Body() body: RegisterAgentDto) {
        return this.agents.register(req.user.userId, req.user.apiKeyId, body);
    }

    @Get()
    @UseGuards(JwtGuard)
    list(@Request() req: any) {
        return this.agents.findByUser(req.user.userId);
    }

    @Patch('me')
    @UseGuards(ApiKeyGuard)
    updateSelf(@Request() req: any, @Body() body: { webhookUrl?: string; cronSchedule?: string }) {
        return this.agents.updateSelf(req.user.agentId, body);
    }

    @Get('public')
    listPublic() {
        return this.agents.findAllPublic();
    }
}
