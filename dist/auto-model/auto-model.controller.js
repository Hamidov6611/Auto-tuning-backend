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
exports.AutoModelController = void 0;
const common_1 = require("@nestjs/common");
const auto_model_service_1 = require("./auto-model.service");
const create_auto_model_dto_1 = require("./dto/create-auto-model.dto");
const update_auto_model_dto_1 = require("./dto/update-auto-model.dto");
const platform_express_1 = require("@nestjs/platform-express");
let AutoModelController = class AutoModelController {
    constructor(autoModelService) {
        this.autoModelService = autoModelService;
    }
    create(files, createAutoModelDto) {
        const { img } = files;
        return this.autoModelService.create(createAutoModelDto, img[0]);
    }
    getAllModel() {
        return this.autoModelService.getAllModel();
    }
    findAll(page, limit) {
        return this.autoModelService.findAll(page, limit);
    }
    findOne(id) {
        return this.autoModelService.findOne(+id);
    }
    update(id, updateAutoModelDto, files) {
        const { img } = files;
        return this.autoModelService.update(+id, updateAutoModelDto, img ? img[0] : '');
    }
    remove(id) {
        return this.autoModelService.remove(+id);
    }
};
exports.AutoModelController = AutoModelController;
__decorate([
    (0, common_1.Post)('add'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'img', maxCount: 1 }])),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_auto_model_dto_1.CreateAutoModelDto]),
    __metadata("design:returntype", void 0)
], AutoModelController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('model'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AutoModelController.prototype, "getAllModel", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], AutoModelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AutoModelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: "img", maxCount: 1 }])),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_auto_model_dto_1.UpdateAutoModelDto, Object]),
    __metadata("design:returntype", void 0)
], AutoModelController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AutoModelController.prototype, "remove", null);
exports.AutoModelController = AutoModelController = __decorate([
    (0, common_1.Controller)('auto-model'),
    __metadata("design:paramtypes", [auto_model_service_1.AutoModelService])
], AutoModelController);
//# sourceMappingURL=auto-model.controller.js.map