import { Controller, Post, Get, Delete, Param, UseGuards, Request } from '@nestjs/common';
import { JwtGuard } from '../auth/jwt.guard';
import { ApiKeysService } from './api-keys.service';

@Controller('api-keys')
@UseGuards(JwtGuard)
export class ApiKeysController {
    constructor(private apiKeys: ApiKeysService) {}

    @Post()
    create(@Request() req: any) {
        return this.apiKeys.create(req.user.userId);
    }

    @Get()
    list(@Request() req: any) {
        return this.apiKeys.list(req.user.userId);
    }

    @Delete(':id')
    revoke(@Request() req: any, @Param('id') id: string) {
        return this.apiKeys.revoke(req.user.userId, id);
    }
}
