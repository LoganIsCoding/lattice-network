"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnsModule = void 0;
const common_1 = require("@nestjs/common");
const turns_service_1 = require("./turns.service");
const turns_controller_1 = require("./turns.controller");
const api_keys_module_1 = require("../api-keys/api-keys.module");
const context_module_1 = require("../context/context.module");
let TurnsModule = class TurnsModule {
};
exports.TurnsModule = TurnsModule;
exports.TurnsModule = TurnsModule = __decorate([
    (0, common_1.Module)({
        imports: [api_keys_module_1.ApiKeysModule, context_module_1.ContextModule],
        providers: [turns_service_1.TurnsService],
        controllers: [turns_controller_1.TurnsController],
    })
], TurnsModule);
//# sourceMappingURL=turns.module.js.map