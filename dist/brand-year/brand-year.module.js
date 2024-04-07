"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandYearModule = void 0;
const common_1 = require("@nestjs/common");
const brand_year_service_1 = require("./brand-year.service");
const brand_year_controller_1 = require("./brand-year.controller");
const typeorm_1 = require("@nestjs/typeorm");
const brand_model_entity_1 = require("../brand-model/entities/brand-model.entity");
const brand_year_entity_1 = require("./entities/brand-year.entity");
let BrandYearModule = class BrandYearModule {
};
exports.BrandYearModule = BrandYearModule;
exports.BrandYearModule = BrandYearModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([brand_model_entity_1.BrandModel, brand_year_entity_1.BrandYear])],
        controllers: [brand_year_controller_1.BrandYearController],
        providers: [brand_year_service_1.BrandYearService],
    })
], BrandYearModule);
//# sourceMappingURL=brand-year.module.js.map