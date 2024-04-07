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
exports.ParsingCarsMarksTunungStatistic = void 0;
const parsing_cars_tuning_entity_1 = require("../../parsing_cars_tunings/entities/parsing_cars_tuning.entity");
const typeorm_1 = require("typeorm");
let ParsingCarsMarksTunungStatistic = class ParsingCarsMarksTunungStatistic {
};
exports.ParsingCarsMarksTunungStatistic = ParsingCarsMarksTunungStatistic;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ParsingCarsMarksTunungStatistic.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => parsing_cars_tuning_entity_1.ParsingCarsTuning, (tuning) => tuning.tuning_statistic_id),
    (0, typeorm_1.JoinColumn)({ name: 'parent_id' }),
    __metadata("design:type", parsing_cars_tuning_entity_1.ParsingCarsTuning)
], ParsingCarsMarksTunungStatistic.prototype, "parent_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ParsingCarsMarksTunungStatistic.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ParsingCarsMarksTunungStatistic.prototype, "original", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ParsingCarsMarksTunungStatistic.prototype, "after_tuning", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ParsingCarsMarksTunungStatistic.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ParsingCarsMarksTunungStatistic.prototype, "updated_at", void 0);
exports.ParsingCarsMarksTunungStatistic = ParsingCarsMarksTunungStatistic = __decorate([
    (0, typeorm_1.Entity)("parsing_cars_marks_tunung_statistics")
], ParsingCarsMarksTunungStatistic);
//# sourceMappingURL=parsing_cars_marks_tunung_statistic.entity.js.map