"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stage1Module = void 0;
const common_1 = require("@nestjs/common");
const stage1_service_1 = require("./stage1.service");
const stage1_controller_1 = require("./stage1.controller");
const typeorm_1 = require("@nestjs/typeorm");
const brand_engine_entity_1 = require("../brand-engine/entities/brand-engine.entity");
const stage1_entity_1 = require("./entities/stage1.entity");
let Stage1Module = class Stage1Module {
};
exports.Stage1Module = Stage1Module;
exports.Stage1Module = Stage1Module = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([brand_engine_entity_1.BrandEngine, stage1_entity_1.Stage1])
        ],
        controllers: [stage1_controller_1.Stage1Controller],
        providers: [stage1_service_1.Stage1Service],
    })
], Stage1Module);
//# sourceMappingURL=stage1.module.js.map