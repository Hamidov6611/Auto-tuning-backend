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
exports.BrandEngineController = void 0;
const common_1 = require("@nestjs/common");
const brand_engine_service_1 = require("./brand-engine.service");
const create_brand_engine_dto_1 = require("./dto/create-brand-engine.dto");
const update_brand_engine_dto_1 = require("./dto/update-brand-engine.dto");
let BrandEngineController = class BrandEngineController {
    constructor(brandEngineService) {
        this.brandEngineService = brandEngineService;
    }
    create(createBrandEngineDto) {
        return this.brandEngineService.create(createBrandEngineDto);
    }
    findAllByPageination(page, limit) {
        return this.brandEngineService.findAllByPageination(page, limit);
    }
    findAll() {
        return this.brandEngineService.findAll();
    }
    findOne(id) {
        return this.brandEngineService.findOne(+id);
    }
    update(id, updateBrandEngineDto) {
        return this.brandEngineService.update(+id, updateBrandEngineDto);
    }
    remove(id) {
        return this.brandEngineService.remove(+id);
    }
};
exports.BrandEngineController = BrandEngineController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_brand_engine_dto_1.CreateBrandEngineDto]),
    __metadata("design:returntype", void 0)
], BrandEngineController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("pagination"),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], BrandEngineController.prototype, "findAllByPageination", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BrandEngineController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandEngineController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_brand_engine_dto_1.UpdateBrandEngineDto]),
    __metadata("design:returntype", void 0)
], BrandEngineController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandEngineController.prototype, "remove", null);
exports.BrandEngineController = BrandEngineController = __decorate([
    (0, common_1.Controller)('brand-engine'),
    __metadata("design:paramtypes", [brand_engine_service_1.BrandEngineService])
], BrandEngineController);
//# sourceMappingURL=brand-engine.controller.js.map