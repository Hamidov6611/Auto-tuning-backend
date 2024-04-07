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
exports.Catalog = void 0;
const brand_entity_1 = require("../../brand/entities/brand.entity");
const typeorm_1 = require("typeorm");
let Catalog = class Catalog {
};
exports.Catalog = Catalog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'catalog_id' }),
    __metadata("design:type", Number)
], Catalog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Catalog.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Catalog.prototype, "img", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => brand_entity_1.Brand, (brand) => brand.catalog),
    (0, typeorm_1.JoinColumn)({ name: "brand_id" }),
    __metadata("design:type", Array)
], Catalog.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Catalog.prototype, "createdat", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Catalog.prototype, "updatedat", void 0);
exports.Catalog = Catalog = __decorate([
    (0, typeorm_1.Entity)()
], Catalog);
//# sourceMappingURL=catalog.entity.js.map