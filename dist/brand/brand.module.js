"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandModule = void 0;
const common_1 = require("@nestjs/common");
const brand_service_1 = require("./brand.service");
const brand_controller_1 = require("./brand.controller");
const file_service_1 = require("../file/file.service");
const typeorm_1 = require("@nestjs/typeorm");
const brand_entity_1 = require("./entities/brand.entity");
const catalog_entity_1 = require("../catalog/entities/catalog.entity");
let BrandModule = class BrandModule {
};
exports.BrandModule = BrandModule;
exports.BrandModule = BrandModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([brand_entity_1.Brand, catalog_entity_1.Catalog])
        ],
        controllers: [brand_controller_1.BrandController],
        providers: [brand_service_1.BrandService, file_service_1.FileService],
    })
], BrandModule);
//# sourceMappingURL=brand.module.js.map