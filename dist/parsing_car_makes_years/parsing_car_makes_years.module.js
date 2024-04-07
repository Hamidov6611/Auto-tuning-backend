"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsingCarMakesYearsModule = void 0;
const common_1 = require("@nestjs/common");
const parsing_car_makes_years_service_1 = require("./parsing_car_makes_years.service");
const parsing_car_makes_years_controller_1 = require("./parsing_car_makes_years.controller");
const typeorm_1 = require("@nestjs/typeorm");
const parsing_car_make_entity_1 = require("../parsing_car_makes/entities/parsing_car_make.entity");
const parsing_car_makes_year_entity_1 = require("./entities/parsing_car_makes_year.entity");
let ParsingCarMakesYearsModule = class ParsingCarMakesYearsModule {
};
exports.ParsingCarMakesYearsModule = ParsingCarMakesYearsModule;
exports.ParsingCarMakesYearsModule = ParsingCarMakesYearsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([parsing_car_make_entity_1.ParsingCarMake, parsing_car_makes_year_entity_1.ParsingCarMakesYear])],
        controllers: [parsing_car_makes_years_controller_1.ParsingCarMakesYearsController],
        providers: [parsing_car_makes_years_service_1.ParsingCarMakesYearsService],
    })
], ParsingCarMakesYearsModule);
//# sourceMappingURL=parsing_car_makes_years.module.js.map