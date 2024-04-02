"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RcPlusModule = void 0;
const common_1 = require("@nestjs/common");
const rc_plus_service_1 = require("./rc-plus.service");
const rc_plus_controller_1 = require("./rc-plus.controller");
const typeorm_1 = require("@nestjs/typeorm");
const brand_engine_entity_1 = require("../brand-engine/entities/brand-engine.entity");
const rc_plus_entity_1 = require("./entities/rc-plus.entity");
let RcPlusModule = class RcPlusModule {
};
exports.RcPlusModule = RcPlusModule;
exports.RcPlusModule = RcPlusModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([brand_engine_entity_1.BrandEngine, rc_plus_entity_1.RcPlus])],
        controllers: [rc_plus_controller_1.RcPlusController],
        providers: [rc_plus_service_1.RcPlusService],
    })
], RcPlusModule);
//# sourceMappingURL=rc-plus.module.js.map