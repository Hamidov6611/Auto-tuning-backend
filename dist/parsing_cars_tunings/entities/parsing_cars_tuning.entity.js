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
exports.ParsingCarsTuning = void 0;
const parsing_cars_engine_entity_1 = require("../../parsing_cars_engines/entities/parsing_cars_engine.entity");
const parsing_cars_marks_tunung_statistic_entity_1 = require("../../parsing_cars_marks_tunung_statistics/entities/parsing_cars_marks_tunung_statistic.entity");
const typeorm_1 = require("typeorm");
let ParsingCarsTuning = class ParsingCarsTuning {
};
exports.ParsingCarsTuning = ParsingCarsTuning;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ParsingCarsTuning.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => parsing_cars_engine_entity_1.ParsingCarsEngine, (parsing_car_engine) => parsing_car_engine.tuning_id),
    (0, typeorm_1.JoinColumn)({ name: 'parent_id' }),
    __metadata("design:type", parsing_cars_engine_entity_1.ParsingCarsEngine)
], ParsingCarsTuning.prototype, "parent_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ParsingCarsTuning.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ParsingCarsTuning.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ParsingCarsTuning.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ParsingCarsTuning.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => parsing_cars_marks_tunung_statistic_entity_1.ParsingCarsMarksTunungStatistic, (statistic) => statistic.parent_id),
    (0, typeorm_1.JoinColumn)({ name: 'tuning_id' }),
    __metadata("design:type", Array)
], ParsingCarsTuning.prototype, "tuning_statistic_id", void 0);
exports.ParsingCarsTuning = ParsingCarsTuning = __decorate([
    (0, typeorm_1.Entity)('parsing_cars_tunings')
], ParsingCarsTuning);
//# sourceMappingURL=parsing_cars_tuning.entity.js.map