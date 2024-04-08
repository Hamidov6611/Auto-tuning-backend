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
exports.AutoModel = void 0;
const auto_catalog_entity_1 = require("../../auto-catalog/entities/auto-catalog.entity");
const typeorm_1 = require("typeorm");
let AutoModel = class AutoModel {
};
exports.AutoModel = AutoModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'auto_model_id' }),
    __metadata("design:type", Number)
], AutoModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AutoModel.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AutoModel.prototype, "img", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => auto_catalog_entity_1.AutoCatalog, (catalog) => catalog.model),
    (0, typeorm_1.JoinColumn)({ name: "catalog_id" }),
    __metadata("design:type", Array)
], AutoModel.prototype, "catalog", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AutoModel.prototype, "createdat", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AutoModel.prototype, "updatedat", void 0);
exports.AutoModel = AutoModel = __decorate([
    (0, typeorm_1.Entity)('auto_model')
], AutoModel);
//# sourceMappingURL=auto-model.entity.js.map