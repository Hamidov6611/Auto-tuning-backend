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
exports.RcPlusController = void 0;
const common_1 = require("@nestjs/common");
const rc_plus_service_1 = require("./rc-plus.service");
const create_rc_plus_dto_1 = require("./dto/create-rc-plus.dto");
const update_rc_plus_dto_1 = require("./dto/update-rc-plus.dto");
let RcPlusController = class RcPlusController {
    constructor(rcPlusService) {
        this.rcPlusService = rcPlusService;
    }
    create(createRcPlusDto) {
        return this.rcPlusService.create(createRcPlusDto);
    }
    findAllByPageination(page, limit) {
        return this.rcPlusService.findAllByPageination(page, limit);
    }
    findAll() {
        return this.rcPlusService.findAll();
    }
    findOne(id) {
        return this.rcPlusService.findOne(+id);
    }
    update(id, updateRcPlusDto) {
        return this.rcPlusService.update(+id, updateRcPlusDto);
    }
    remove(id) {
        return this.rcPlusService.remove(+id);
    }
};
exports.RcPlusController = RcPlusController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rc_plus_dto_1.CreateRcPlusDto]),
    __metadata("design:returntype", void 0)
], RcPlusController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('pagination'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], RcPlusController.prototype, "findAllByPageination", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RcPlusController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RcPlusController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_rc_plus_dto_1.UpdateRcPlusDto]),
    __metadata("design:returntype", void 0)
], RcPlusController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RcPlusController.prototype, "remove", null);
exports.RcPlusController = RcPlusController = __decorate([
    (0, common_1.Controller)('rc-plus'),
    __metadata("design:paramtypes", [rc_plus_service_1.RcPlusService])
], RcPlusController);
//# sourceMappingURL=rc-plus.controller.js.map