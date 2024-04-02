"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandModelModule = void 0;
const common_1 = require("@nestjs/common");
const brand_model_service_1 = require("./brand-model.service");
const brand_model_controller_1 = require("./brand-model.controller");
const typeorm_1 = require("@nestjs/typeorm");
const brand_model_entity_1 = require("./entities/brand-model.entity");
const brand_entity_1 = require("../brand/entities/brand.entity");
let BrandModelModule = class BrandModelModule {
};
exports.BrandModelModule = BrandModelModule;
exports.BrandModelModule = BrandModelModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([brand_model_entity_1.BrandModel, brand_entity_1.Brand])],
        controllers: [brand_model_controller_1.BrandModelController],
        providers: [brand_model_service_1.BrandModelService],
    })
], BrandModelModule);
//# sourceMappingURL=brand-model.module.js.map