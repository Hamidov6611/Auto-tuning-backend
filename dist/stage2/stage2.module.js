"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stage2Module = void 0;
const common_1 = require("@nestjs/common");
const stage2_service_1 = require("./stage2.service");
const stage2_controller_1 = require("./stage2.controller");
const typeorm_1 = require("@nestjs/typeorm");
const brand_engine_entity_1 = require("../brand-engine/entities/brand-engine.entity");
const stage2_entity_1 = require("./entities/stage2.entity");
let Stage2Module = class Stage2Module {
};
exports.Stage2Module = Stage2Module;
exports.Stage2Module = Stage2Module = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([brand_engine_entity_1.BrandEngine, stage2_entity_1.Stage2])],
        controllers: [stage2_controller_1.Stage2Controller],
        providers: [stage2_service_1.Stage2Service],
    })
], Stage2Module);
//# sourceMappingURL=stage2.module.js.map