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
exports.AutoCatalogController = void 0;
const common_1 = require("@nestjs/common");
const auto_catalog_service_1 = require("./auto-catalog.service");
const create_auto_catalog_dto_1 = require("./dto/create-auto-catalog.dto");
const update_auto_catalog_dto_1 = require("./dto/update-auto-catalog.dto");
const platform_express_1 = require("@nestjs/platform-express");
let AutoCatalogController = class AutoCatalogController {
    constructor(autoCatalogService) {
        this.autoCatalogService = autoCatalogService;
    }
    create(files, createCatalogDto) {
        const { img, video } = files;
        const imageFile = img ? img[0] : null;
        const videoFile = video ? video[0] : null;
        return this.autoCatalogService.create(createCatalogDto, imageFile, videoFile);
    }
    findAll(page, limit) {
        return this.autoCatalogService.findAll(page, limit);
    }
    getByModel(id) {
        return this.autoCatalogService.getCatalogByModel(id);
    }
    findOne(id) {
        return this.autoCatalogService.findOne(+id);
    }
    update(files, id, updateAutoCatalogDto) {
        const { img, video } = files;
        const imageFile = img ? img[0] : null;
        const videoFile = video ? video[0] : null;
        return this.autoCatalogService.update(id, updateAutoCatalogDto, imageFile, videoFile);
    }
    remove(id) {
        return this.autoCatalogService.remove(+id);
    }
};
exports.AutoCatalogController = AutoCatalogController;
__decorate([
    (0, common_1.Post)('add'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'img', maxCount: 1 }, { name: 'video', maxCount: 1 },])),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_auto_catalog_dto_1.CreateAutoCatalogDto]),
    __metadata("design:returntype", void 0)
], AutoCatalogController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], AutoCatalogController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findByModel/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AutoCatalogController.prototype, "getByModel", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AutoCatalogController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'img', maxCount: 1 }, { name: 'video', maxCount: 1 },])),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, update_auto_catalog_dto_1.UpdateAutoCatalogDto]),
    __metadata("design:returntype", void 0)
], AutoCatalogController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AutoCatalogController.prototype, "remove", null);
exports.AutoCatalogController = AutoCatalogController = __decorate([
    (0, common_1.Controller)('auto-catalog'),
    __metadata("design:paramtypes", [auto_catalog_service_1.AutoCatalogService])
], AutoCatalogController);
//# sourceMappingURL=auto-catalog.controller.js.map