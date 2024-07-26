"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsingCarsTuningsModule = void 0;
const common_1 = require("@nestjs/common");
const parsing_cars_tunings_service_1 = require("./parsing_cars_tunings.service");
const parsing_cars_tunings_controller_1 = require("./parsing_cars_tunings.controller");
const typeorm_1 = require("@nestjs/typeorm");
const parsing_cars_engine_entity_1 = require("../parsing_cars_engines/entities/parsing_cars_engine.entity");
const parsing_cars_tuning_entity_1 = require("./entities/parsing_cars_tuning.entity");
let ParsingCarsTuningsModule = class ParsingCarsTuningsModule {
};
exports.ParsingCarsTuningsModule = ParsingCarsTuningsModule;
exports.ParsingCarsTuningsModule = ParsingCarsTuningsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([parsing_cars_engine_entity_1.ParsingCarsEngine, parsing_cars_tuning_entity_1.ParsingCarsTuning])
        ],
        controllers: [parsing_cars_tunings_controller_1.ParsingCarsTuningsController],
        providers: [parsing_cars_tunings_service_1.ParsingCarsTuningsService],
    })
], ParsingCarsTuningsModule);
//# sourceMappingURL=parsing_cars_tunings.module.js.map