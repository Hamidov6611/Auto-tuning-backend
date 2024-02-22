"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoCatalogModule = void 0;
const common_1 = require("@nestjs/common");
const auto_catalog_service_1 = require("./auto-catalog.service");
const auto_catalog_controller_1 = require("./auto-catalog.controller");
const typeorm_1 = require("@nestjs/typeorm");
const auto_catalog_entity_1 = require("./entities/auto-catalog.entity");
const file_service_1 = require("../file/file.service");
const auto_model_entity_1 = require("../auto-model/entities/auto-model.entity");
let AutoCatalogModule = class AutoCatalogModule {
};
exports.AutoCatalogModule = AutoCatalogModule;
exports.AutoCatalogModule = AutoCatalogModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([auto_catalog_entity_1.AutoCatalog, auto_model_entity_1.AutoModel])],
        controllers: [auto_catalog_controller_1.AutoCatalogController],
        providers: [auto_catalog_service_1.AutoCatalogService, file_service_1.FileService],
    })
], AutoCatalogModule);
//# sourceMappingURL=auto-catalog.module.js.map