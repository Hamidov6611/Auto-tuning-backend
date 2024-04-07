"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsingCarsEngine = void 0;
const parsing_car_makes_year_entity_1 = require("../../parsing_car_makes_years/entities/parsing_car_makes_year.entity");
const parsing_cars_tuning_entity_1 = require("../../parsing_cars_tunings/entities/parsing_cars_tuning.entity");
const typeorm_1 = require("typeorm");
let ParsingCarsEngine = class ParsingCarsEngine {
};
exports.ParsingCarsEngine = ParsingCarsEngine;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ParsingCarsEngine.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => parsing_car_makes_year_entity_1.ParsingCarMakesYear, (parsing_car_makes_years) => parsing_car_makes_years.parsing_engine_id),
    (0, typeorm_1.JoinColumn)({ name: 'parent_id' }),
    __metadata("design:type", parsing_car_makes_year_entity_1.ParsingCarMakesYear)
], ParsingCarsEngine.prototype, "parent_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ParsingCarsEngine.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ParsingCarsEngine.prototype, "type_engine", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ParsingCarsEngine.prototype, "engine_hp", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ParsingCarsEngine.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ParsingCarsEngine.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => parsing_cars_tuning_entity_1.ParsingCarsTuning, (tuning) => tuning.parent_id),
    (0, typeorm_1.JoinColumn)({ name: "tuning_id" }),
    __metadata("design:type", Array)
], ParsingCarsEngine.prototype, "tuning_id", void 0);
exports.ParsingCarsEngine = ParsingCarsEngine = __decorate([
    (0, typeorm_1.Entity)('parsing_cars_engines')
], ParsingCarsEngine);
//# sourceMappingURL=parsing_cars_engine.entity.js.map