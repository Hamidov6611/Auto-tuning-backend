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
exports.BrandModel = void 0;
const brand_year_entity_1 = require("../../brand-year/entities/brand-year.entity");
const brand_entity_1 = require("../../brand/entities/brand.entity");
const typeorm_1 = require("typeorm");
let BrandModel = class BrandModel {
};
exports.BrandModel = BrandModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'brand_model_id' }),
    __metadata("design:type", Number)
], BrandModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BrandModel.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => brand_entity_1.Brand, (brand) => brand.brandModel),
    (0, typeorm_1.JoinColumn)({ name: 'brand_id' }),
    __metadata("design:type", brand_entity_1.Brand)
], BrandModel.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => brand_year_entity_1.BrandYear, (year) => year.model),
    (0, typeorm_1.JoinColumn)({ name: 'brand_year_id' }),
    __metadata("design:type", Array)
], BrandModel.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BrandModel.prototype, "createdat", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BrandModel.prototype, "updatedat", void 0);
exports.BrandModel = BrandModel = __decorate([
    (0, typeorm_1.Entity)()
], BrandModel);
//# sourceMappingURL=brand-model.entity.js.map