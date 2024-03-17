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
exports.Stage1Controller = void 0;
const common_1 = require("@nestjs/common");
const stage1_service_1 = require("./stage1.service");
const create_stage1_dto_1 = require("./dto/create-stage1.dto");
const update_stage1_dto_1 = require("./dto/update-stage1.dto");
let Stage1Controller = class Stage1Controller {
    constructor(stage1Service) {
        this.stage1Service = stage1Service;
    }
    create(createStage1Dto) {
        return this.stage1Service.create(createStage1Dto);
    }
    findAllByPageination(page, limit) {
        return this.stage1Service.findAllByPageination(page, limit);
    }
    findAll() {
        return this.stage1Service.findAll();
    }
    findOne(id) {
        return this.stage1Service.findOne(+id);
    }
    update(id, updateStage1Dto) {
        return this.stage1Service.update(+id, updateStage1Dto);
    }
    remove(id) {
        return this.stage1Service.remove(+id);
    }
};
exports.Stage1Controller = Stage1Controller;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_stage1_dto_1.CreateStage1Dto]),
    __metadata("design:returntype", void 0)
], Stage1Controller.prototype, "create", null);
__decorate([
    (0, common_1.Get)("pagination"),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Stage1Controller.prototype, "findAllByPageination", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Stage1Controller.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Stage1Controller.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_stage1_dto_1.UpdateStage1Dto]),
    __metadata("design:returntype", void 0)
], Stage1Controller.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Stage1Controller.prototype, "remove", null);
exports.Stage1Controller = Stage1Controller = __decorate([
    (0, common_1.Controller)('stage1'),
    __metadata("design:paramtypes", [stage1_service_1.Stage1Service])
], Stage1Controller);
//# sourceMappingURL=stage1.controller.js.map