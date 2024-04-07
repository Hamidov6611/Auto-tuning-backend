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
exports.BrandEngine = void 0;
const brand_year_entity_1 = require("../../brand-year/entities/brand-year.entity");
const eco_entity_1 = require("../../eco/entities/eco.entity");
const rc_plus_entity_1 = require("../../rc-plus/entities/rc-plus.entity");
const stage1_entity_1 = require("../../stage1/entities/stage1.entity");
const stage2_entity_1 = require("../../stage2/entities/stage2.entity");
const transmission_entity_1 = require("../../transmission/entities/transmission.entity");
const typeorm_1 = require("typeorm");
let BrandEngine = class BrandEngine {
};
exports.BrandEngine = BrandEngine;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'brand_engine_id' }),
    __metadata("design:type", Number)
], BrandEngine.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BrandEngine.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BrandEngine.prototype, "type_engine", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BrandEngine.prototype, "engine_hp", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => eco_entity_1.Eco, (eco) => eco.engine),
    (0, typeorm_1.JoinColumn)({ name: 'eco_id' }),
    __metadata("design:type", Array)
], BrandEngine.prototype, "eco", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => stage1_entity_1.Stage1, (stage1) => stage1.engine),
    (0, typeorm_1.JoinColumn)({ name: 'stage_one_id' }),
    __metadata("design:type", Array)
], BrandEngine.prototype, "stage_one", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => stage2_entity_1.Stage2, (stage2) => stage2.engine),
    (0, typeorm_1.JoinColumn)({ name: 'stage_two_id' }),
    __metadata("design:type", Array)
], BrandEngine.prototype, "stage_two", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transmission_entity_1.Transmission, (transmission) => transmission.engine),
    (0, typeorm_1.JoinColumn)({ name: "transmission_id" }),
    __metadata("design:type", Array)
], BrandEngine.prototype, "transmission", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rc_plus_entity_1.RcPlus, (rc) => rc.engine),
    (0, typeorm_1.JoinColumn)({ name: "engine_id" }),
    __metadata("design:type", Array)
], BrandEngine.prototype, "rc_plus", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => brand_year_entity_1.BrandYear, (year) => year.engine),
    (0, typeorm_1.JoinColumn)({ name: 'year_id' }),
    __metadata("design:type", brand_year_entity_1.BrandYear)
], BrandEngine.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BrandEngine.prototype, "createdat", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BrandEngine.prototype, "updatedat", void 0);
exports.BrandEngine = BrandEngine = __decorate([
    (0, typeorm_1.Entity)()
], BrandEngine);
//# sourceMappingURL=brand-engine.entity.js.map