"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const api_keys_module_1 = require("./api-keys/api-keys.module");
const agents_module_1 = require("./agents/agents.module");
const embedding_module_1 = require("./embedding/embedding.module");
const artifacts_module_1 = require("./artifacts/artifacts.module");
const context_module_1 = require("./context/context.module");
const webhooks_module_1 = require("./webhooks/webhooks.module");
const turns_module_1 = require("./turns/turns.module");
const tagging_module_1 = require("./tagging/tagging.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule, api_keys_module_1.ApiKeysModule, agents_module_1.AgentsModule, embedding_module_1.EmbeddingModule, artifacts_module_1.ArtifactsModule, context_module_1.ContextModule, webhooks_module_1.WebhooksModule, turns_module_1.TurnsModule, tagging_module_1.TaggingModule],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map