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
exports.BrandYear = void 0;
const brand_engine_entity_1 = require("../../brand-engine/entities/brand-engine.entity");
const brand_model_entity_1 = require("../../brand-model/entities/brand-model.entity");
const typeorm_1 = require("typeorm");
let BrandYear = class BrandYear {
};
exports.BrandYear = BrandYear;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'brand_year_id' }),
    __metadata("design:type", Number)
], BrandYear.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BrandYear.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => brand_model_entity_1.BrandModel, (model) => model.year),
    (0, typeorm_1.JoinColumn)({ name: 'model_id' }),
    __metadata("design:type", brand_model_entity_1.BrandModel)
], BrandYear.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => brand_engine_entity_1.BrandEngine, (engine) => engine.year),
    (0, typeorm_1.JoinColumn)({ name: "engine_id" }),
    __metadata("design:type", Array)
], BrandYear.prototype, "engine", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BrandYear.prototype, "createdat", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BrandYear.prototype, "updatedat", void 0);
exports.BrandYear = BrandYear = __decorate([
    (0, typeorm_1.Entity)()
], BrandYear);
//# sourceMappingURL=brand-year.entity.js.map