"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcoModule = void 0;
const common_1 = require("@nestjs/common");
const eco_service_1 = require("./eco.service");
const eco_controller_1 = require("./eco.controller");
const typeorm_1 = require("@nestjs/typeorm");
const brand_engine_entity_1 = require("../brand-engine/entities/brand-engine.entity");
const eco_entity_1 = require("./entities/eco.entity");
let EcoModule = class EcoModule {
};
exports.EcoModule = EcoModule;
exports.EcoModule = EcoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([brand_engine_entity_1.BrandEngine, eco_entity_1.Eco])],
        controllers: [eco_controller_1.EcoController],
        providers: [eco_service_1.EcoService],
    })
], EcoModule);
//# sourceMappingURL=eco.module.js.map