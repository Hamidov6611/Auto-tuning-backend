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
exports.AutoCatalog = void 0;
const class_validator_1 = require("class-validator");
const auto_model_entity_1 = require("../../auto-model/entities/auto-model.entity");
const typeorm_1 = require("typeorm");
let AutoCatalog = class AutoCatalog {
};
exports.AutoCatalog = AutoCatalog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'auto_catalog_id' }),
    __metadata("design:type", Number)
], AutoCatalog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AutoCatalog.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AutoCatalog.prototype, "video", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AutoCatalog.prototype, "img", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => auto_model_entity_1.AutoModel, (model) => model.catalog),
    (0, typeorm_1.JoinColumn)({ name: "model_id" }),
    __metadata("design:type", auto_model_entity_1.AutoModel)
], AutoCatalog.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AutoCatalog.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AutoCatalog.prototype, "createdat", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AutoCatalog.prototype, "updatedat", void 0);
exports.AutoCatalog = AutoCatalog = __decorate([
    (0, typeorm_1.Entity)()
], AutoCatalog);
//# sourceMappingURL=auto-catalog.entity.js.map