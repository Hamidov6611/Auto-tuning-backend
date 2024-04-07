"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsingCarsModule = void 0;
const common_1 = require("@nestjs/common");
const parsing_cars_service_1 = require("./parsing_cars.service");
const parsing_cars_controller_1 = require("./parsing_cars.controller");
const typeorm_1 = require("@nestjs/typeorm");
const parsing_car_entity_1 = require("./entities/parsing_car.entity");
let ParsingCarsModule = class ParsingCarsModule {
};
exports.ParsingCarsModule = ParsingCarsModule;
exports.ParsingCarsModule = ParsingCarsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([parsing_car_entity_1.ParsingCar])],
        controllers: [parsing_cars_controller_1.ParsingCarsController],
        providers: [parsing_cars_service_1.ParsingCarsService],
    })
], ParsingCarsModule);
//# sourceMappingURL=parsing_cars.module.js.map