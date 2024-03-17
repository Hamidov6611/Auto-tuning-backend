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
exports.BrandYearController = void 0;
const common_1 = require("@nestjs/common");
const brand_year_service_1 = require("./brand-year.service");
const create_brand_year_dto_1 = require("./dto/create-brand-year.dto");
const update_brand_year_dto_1 = require("./dto/update-brand-year.dto");
let BrandYearController = class BrandYearController {
    constructor(brandYearService) {
        this.brandYearService = brandYearService;
    }
    create(createBrandYearDto) {
        return this.brandYearService.create(createBrandYearDto);
    }
    findAllByPageination(page, limit) {
        return this.brandYearService.findAllByPageination(page, limit);
    }
    findAll() {
        return this.brandYearService.findAll();
    }
    findOne(id) {
        return this.brandYearService.findOne(+id);
    }
    update(id, updateBrandYearDto) {
        return this.brandYearService.update(+id, updateBrandYearDto);
    }
    remove(id) {
        return this.brandYearService.remove(+id);
    }
};
exports.BrandYearController = BrandYearController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_brand_year_dto_1.CreateBrandYearDto]),
    __metadata("design:returntype", void 0)
], BrandYearController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("pagination"),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], BrandYearController.prototype, "findAllByPageination", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BrandYearController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandYearController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_brand_year_dto_1.UpdateBrandYearDto]),
    __metadata("design:returntype", void 0)
], BrandYearController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandYearController.prototype, "remove", null);
exports.BrandYearController = BrandYearController = __decorate([
    (0, common_1.Controller)('brand-year'),
    __metadata("design:paramtypes", [brand_year_service_1.BrandYearService])
], BrandYearController);
//# sourceMappingURL=brand-year.controller.js.map