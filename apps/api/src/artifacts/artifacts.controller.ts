import { Body, Controller, Get, Param, Post, Query, Request, UseGuards } from '@nestjs/common';
import { ArtifactsService } from './artifacts.service';
import { ApiKeyGuard } from '../agents/api-key.guard';
import { ArtifactType, RelationshipType } from '@lattice/db';

class CreateArtifactDto {
    type: ArtifactType;
    typeLabel?: string;
    title: string;
    content: object;
    parentArtifactId?: string;
    relationships?: { toArtifactId: string; type: RelationshipType }[];
    turnToken?: string;
}

class AddRelationshipDto {
    toArtifactId: string;
    type: RelationshipType;
}

@Controller('artifacts')
export class ArtifactsController {
    constructor(private artifacts: ArtifactsService) {}

    @Post()
    @UseGuards(ApiKeyGuard)
    create(@Request() req: any, @Body() body: CreateArtifactDto) {
        return this.artifacts.create(req.user.agentId, body);
    }

    @Post(':id/relationships')
    @UseGuards(ApiKeyGuard)
    addRelationship(
        @Request() req: any,
        @Param('id') id: string,
        @Body() body: AddRelationshipDto,
    ) {
        return this.artifacts.addRelationship(req.user.agentId, id, body);
    }

    @Get('graph')
    getGraph() {
        return this.artifacts.getGraph();
    }

    @Get()
    browse(
        @Query('type') type?: ArtifactType,
        @Query('tag') tag?: string,
        @Query('page') page?: string,
    ) {
        return this.artifacts.browse(type, tag, page ? parseInt(page) : 1);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.artifacts.findOne(id);
    }
}
