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
exports.Stage2Controller = void 0;
const common_1 = require("@nestjs/common");
const stage2_service_1 = require("./stage2.service");
const create_stage2_dto_1 = require("./dto/create-stage2.dto");
const update_stage2_dto_1 = require("./dto/update-stage2.dto");
let Stage2Controller = class Stage2Controller {
    constructor(stage2Service) {
        this.stage2Service = stage2Service;
    }
    create(createStage2Dto) {
        return this.stage2Service.create(createStage2Dto);
    }
    findByEngine(id) {
        return this.stage2Service.findByEngineId(id);
    }
    findAllByPageination(page, limit) {
        return this.stage2Service.findAllByPageination(page, limit);
    }
    findAll() {
        return this.stage2Service.findAll();
    }
    findOne(id) {
        return this.stage2Service.findOne(+id);
    }
    update(id, updateStage2Dto) {
        return this.stage2Service.update(+id, updateStage2Dto);
    }
    remove(id) {
        return this.stage2Service.remove(+id);
    }
};
exports.Stage2Controller = Stage2Controller;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_stage2_dto_1.CreateStage2Dto]),
    __metadata("design:returntype", void 0)
], Stage2Controller.prototype, "create", null);
__decorate([
    (0, common_1.Get)('engine/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Stage2Controller.prototype, "findByEngine", null);
__decorate([
    (0, common_1.Get)("pagination"),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Stage2Controller.prototype, "findAllByPageination", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Stage2Controller.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Stage2Controller.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_stage2_dto_1.UpdateStage2Dto]),
    __metadata("design:returntype", void 0)
], Stage2Controller.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Stage2Controller.prototype, "remove", null);
exports.Stage2Controller = Stage2Controller = __decorate([
    (0, common_1.Controller)('stage2'),
    __metadata("design:paramtypes", [stage2_service_1.Stage2Service])
], Stage2Controller);
//# sourceMappingURL=stage2.controller.js.map