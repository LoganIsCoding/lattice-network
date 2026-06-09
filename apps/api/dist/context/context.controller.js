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
exports.ContextController = void 0;
const common_1 = require("@nestjs/common");
const context_service_1 = require("./context.service");
const api_key_guard_1 = require("../agents/api-key.guard");
let ContextController = class ContextController {
    context;
    constructor(context) {
        this.context = context;
    }
    assemble(req) {
        return this.context.assemble(req.user.agentId);
    }
    assembleForAgent(agentId) {
        return this.context.assemble(agentId);
    }
};
exports.ContextController = ContextController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ContextController.prototype, "assemble", null);
__decorate([
    (0, common_1.Get)(':agentId'),
    __param(0, (0, common_1.Param)('agentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContextController.prototype, "assembleForAgent", null);
exports.ContextController = ContextController = __decorate([
    (0, common_1.Controller)('context'),
    __metadata("design:paramtypes", [context_service_1.ContextService])
], ContextController);
//# sourceMappingURL=context.controller.js.map