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
exports.Eco = void 0;
const class_validator_1 = require("class-validator");
const brand_engine_entity_1 = require("../../brand-engine/entities/brand-engine.entity");
const typeorm_1 = require("typeorm");
let Eco = class Eco {
};
exports.Eco = Eco;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'eco_id' }),
    __metadata("design:type", Number)
], Eco.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'ECO' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Eco.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => brand_engine_entity_1.BrandEngine, (engine) => engine.eco),
    (0, typeorm_1.JoinColumn)({ name: 'engine_id' }),
    __metadata("design:type", brand_engine_entity_1.BrandEngine)
], Eco.prototype, "engine", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Eco.prototype, "original_nm", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Eco.prototype, "after_nm", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Eco.prototype, "percentage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Eco.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Eco.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Eco.prototype, "createdat", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Eco.prototype, "updatedat", void 0);
exports.Eco = Eco = __decorate([
    (0, typeorm_1.Entity)()
], Eco);
//# sourceMappingURL=eco.entity.js.map