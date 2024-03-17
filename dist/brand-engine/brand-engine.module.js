"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandEngineModule = void 0;
const common_1 = require("@nestjs/common");
const brand_engine_service_1 = require("./brand-engine.service");
const brand_engine_controller_1 = require("./brand-engine.controller");
const typeorm_1 = require("@nestjs/typeorm");
const brand_year_entity_1 = require("../brand-year/entities/brand-year.entity");
const brand_engine_entity_1 = require("./entities/brand-engine.entity");
let BrandEngineModule = class BrandEngineModule {
};
exports.BrandEngineModule = BrandEngineModule;
exports.BrandEngineModule = BrandEngineModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([brand_year_entity_1.BrandYear, brand_engine_entity_1.BrandEngine])],
        controllers: [brand_engine_controller_1.BrandEngineController],
        providers: [brand_engine_service_1.BrandEngineService],
    })
], BrandEngineModule);
//# sourceMappingURL=brand-engine.module.js.map