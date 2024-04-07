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
exports.ParsingCarMake = void 0;
const parsing_car_makes_year_entity_1 = require("../../parsing_car_makes_years/entities/parsing_car_makes_year.entity");
const parsing_car_entity_1 = require("../../parsing_cars/entities/parsing_car.entity");
const typeorm_1 = require("typeorm");
let ParsingCarMake = class ParsingCarMake {
};
exports.ParsingCarMake = ParsingCarMake;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ParsingCarMake.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => parsing_car_entity_1.ParsingCar, (parsing_car) => parsing_car.parsing_make_id),
    (0, typeorm_1.JoinColumn)({ name: 'parent_id' }),
    __metadata("design:type", parsing_car_entity_1.ParsingCar)
], ParsingCarMake.prototype, "parent_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ParsingCarMake.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ParsingCarMake.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ParsingCarMake.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ParsingCarMake.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => parsing_car_makes_year_entity_1.ParsingCarMakesYear, (parsing_car_makes_years) => parsing_car_makes_years.parent_id),
    (0, typeorm_1.JoinColumn)({ name: 'parsing_car_makes_years_id' }),
    __metadata("design:type", Array)
], ParsingCarMake.prototype, "parsing_car_makes_years_id", void 0);
exports.ParsingCarMake = ParsingCarMake = __decorate([
    (0, typeorm_1.Entity)('parsing_car_makes')
], ParsingCarMake);
//# sourceMappingURL=parsing_car_make.entity.js.map