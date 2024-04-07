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
exports.WorkController = void 0;
const common_1 = require("@nestjs/common");
const work_service_1 = require("./work.service");
const create_work_dto_1 = require("./dto/create-work.dto");
const platform_express_1 = require("@nestjs/platform-express");
let WorkController = class WorkController {
    constructor(workService) {
        this.workService = workService;
    }
    create(files, createWorkDto) {
        const { img } = files;
        return this.workService.create(createWorkDto, img[0]);
    }
    findAll(page, limit) {
        return this.workService.findAll(page, limit);
    }
    searchHandler(search) {
        console.log(search);
        return this.workService.searchWorks(search);
    }
    findOne(id) {
        return this.workService.findOne(id);
    }
    update(createWorkDto, id, files) {
        const { img } = files;
        return this.workService.update(id, createWorkDto, img ? img[0] : '');
    }
    remove(id) {
        return this.workService.remove(+id);
    }
};
exports.WorkController = WorkController;
__decorate([
    (0, common_1.Post)('add'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'img', maxCount: 1 }])),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_work_dto_1.CreateWorkDto]),
    __metadata("design:returntype", void 0)
], WorkController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], WorkController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('main'),
    __param(0, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkController.prototype, "searchHandler", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WorkController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'img', maxCount: 1 }])),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_work_dto_1.CreateWorkDto, Number, Object]),
    __metadata("design:returntype", void 0)
], WorkController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkController.prototype, "remove", null);
exports.WorkController = WorkController = __decorate([
    (0, common_1.Controller)('work'),
    __metadata("design:paramtypes", [work_service_1.WorkService])
], WorkController);
//# sourceMappingURL=work.controller.js.map