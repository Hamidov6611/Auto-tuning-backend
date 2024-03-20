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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcoController = void 0;
const common_1 = require("@nestjs/common");
const eco_service_1 = require("./eco.service");
const create_eco_dto_1 = require("./dto/create-eco.dto");
const update_eco_dto_1 = require("./dto/update-eco.dto");
let EcoController = class EcoController {
    constructor(ecoService) {
        this.ecoService = ecoService;
    }
    create(createEcoDto) {
        return this.ecoService.create(createEcoDto);
    }
    findAllByPageination(page, limit) {
        return this.ecoService.findAllByPageination(page, limit);
    }
    findAll() {
        return this.ecoService.findAll();
    }
    findOne(id) {
        return this.ecoService.findOne(+id);
    }
    update(id, updateEcoDto) {
        return this.ecoService.update(+id, updateEcoDto);
    }
    remove(id) {
        return this.ecoService.remove(+id);
    }
    findByEngine(id) {
        return this.ecoService.findByEngineId(id);
    }
};
exports.EcoController = EcoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_eco_dto_1.CreateEcoDto]),
    __metadata("design:returntype", void 0)
], EcoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('pagination'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], EcoController.prototype, "findAllByPageination", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EcoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EcoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_eco_dto_1.UpdateEcoDto]),
    __metadata("design:returntype", void 0)
], EcoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EcoController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('engine/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EcoController.prototype, "findByEngine", null);
exports.EcoController = EcoController = __decorate([
    (0, common_1.Controller)('eco'),
    __metadata("design:paramtypes", [eco_service_1.EcoService])
], EcoController);
//# sourceMappingURL=eco.controller.js.map