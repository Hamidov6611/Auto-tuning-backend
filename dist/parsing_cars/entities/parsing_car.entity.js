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
exports.ParsingCar = void 0;
const parsing_car_make_entity_1 = require("../../parsing_car_makes/entities/parsing_car_make.entity");
const typeorm_1 = require("typeorm");
let ParsingCar = class ParsingCar {
};
exports.ParsingCar = ParsingCar;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ParsingCar.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ParsingCar.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ParsingCar.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ParsingCar.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ParsingCar.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ParsingCar.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => parsing_car_make_entity_1.ParsingCarMake, (parsing_make) => parsing_make.parent_id),
    (0, typeorm_1.JoinColumn)({ name: 'parsing_make_id' }),
    __metadata("design:type", Array)
], ParsingCar.prototype, "parsing_make_id", void 0);
exports.ParsingCar = ParsingCar = __decorate([
    (0, typeorm_1.Entity)('parsing_cars')
], ParsingCar);
//# sourceMappingURL=parsing_car.entity.js.map