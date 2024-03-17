"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransmissionModule = void 0;
const common_1 = require("@nestjs/common");
const transmission_service_1 = require("./transmission.service");
const transmission_controller_1 = require("./transmission.controller");
const typeorm_1 = require("@nestjs/typeorm");
const brand_engine_entity_1 = require("../brand-engine/entities/brand-engine.entity");
const transmission_entity_1 = require("./entities/transmission.entity");
let TransmissionModule = class TransmissionModule {
};
exports.TransmissionModule = TransmissionModule;
exports.TransmissionModule = TransmissionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([brand_engine_entity_1.BrandEngine, transmission_entity_1.Transmission])],
        controllers: [transmission_controller_1.TransmissionController],
        providers: [transmission_service_1.TransmissionService],
    })
], TransmissionModule);
//# sourceMappingURL=transmission.module.js.map