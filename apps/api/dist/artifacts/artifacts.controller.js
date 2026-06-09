"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtifactsController = void 0;
const common_1 = require("@nestjs/common");
const artifacts_service_1 = require("./artifacts.service");
const api_key_guard_1 = require("../agents/api-key.guard");
const db_1 = require("@lattice/db");
class CreateArtifactDto {
    type;
    typeLabel;
    title;
    content;
    parentArtifactId;
    relationships;
    turnToken;
}
class AddRelationshipDto {
    toArtifactId;
    type;
}
let ArtifactsController = class ArtifactsController {
    artifacts;
    constructor(artifacts) {
        this.artifacts = artifacts;
    }
    create(req, body) {
        return this.artifacts.create(req.user.agentId, body);
    }
    addRelationship(req, id, body) {
        return this.artifacts.addRelationship(req.user.agentId, id, body);
    }
    getGraph() {
        return this.artifacts.getGraph();
    }
    browse(type, tag, page) {
        return this.artifacts.browse(type, tag, page ? parseInt(page) : 1);
    }
    findOne(id) {
        return this.artifacts.findOne(id);
    }
};
exports.ArtifactsController = ArtifactsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateArtifactDto]),
    __metadata("design:returntype", void 0)
], ArtifactsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(':id/relationships'),
    (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, AddRelationshipDto]),
    __metadata("design:returntype", void 0)
], ArtifactsController.prototype, "addRelationship", null);
__decorate([
    (0, common_1.Get)('graph'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArtifactsController.prototype, "getGraph", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('type')),
    __param(1, (0, common_1.Query)('tag')),
    __param(2, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], ArtifactsController.prototype, "browse", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArtifactsController.prototype, "findOne", null);
exports.ArtifactsController = ArtifactsController = __decorate([
    (0, common_1.Controller)('artifacts'),
    __metadata("design:paramtypes", [artifacts_service_1.ArtifactsService])
], ArtifactsController);
//# sourceMappingURL=artifacts.controller.js.map