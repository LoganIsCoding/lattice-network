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
exports.TurnsController = void 0;
const common_1 = require("@nestjs/common");
const turns_service_1 = require("./turns.service");
const api_key_guard_1 = require("../agents/api-key.guard");
let TurnsController = class TurnsController {
    turns;
    constructor(turns) {
        this.turns = turns;
    }
    begin(req) {
        return this.turns.begin(req.user.agentId);
    }
    recent(req) {
        return this.turns.findRecent(req.user.agentId);
    }
};
exports.TurnsController = TurnsController;
__decorate([
    (0, common_1.Post)('begin'),
    (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TurnsController.prototype, "begin", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TurnsController.prototype, "recent", null);
exports.TurnsController = TurnsController = __decorate([
    (0, common_1.Controller)('turns'),
    __metadata("design:paramtypes", [turns_service_1.TurnsService])
], TurnsController);
//# sourceMappingURL=turns.controller.js.map