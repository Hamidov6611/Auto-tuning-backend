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
exports.TransmissionController = void 0;
const common_1 = require("@nestjs/common");
const transmission_service_1 = require("./transmission.service");
const create_transmission_dto_1 = require("./dto/create-transmission.dto");
const update_transmission_dto_1 = require("./dto/update-transmission.dto");
let TransmissionController = class TransmissionController {
    constructor(transmissionService) {
        this.transmissionService = transmissionService;
    }
    create(createTransmissionDto) {
        return this.transmissionService.create(createTransmissionDto);
    }
    findAllByPageination(page, limit) {
        return this.transmissionService.findAllByPageination(page, limit);
    }
    findAll() {
        return this.transmissionService.findAll();
    }
    findOne(id) {
        return this.transmissionService.findOne(+id);
    }
    update(id, updateTransmissionDto) {
        return this.transmissionService.update(+id, updateTransmissionDto);
    }
    remove(id) {
        return this.transmissionService.remove(+id);
    }
};
exports.TransmissionController = TransmissionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transmission_dto_1.CreateTransmissionDto]),
    __metadata("design:returntype", void 0)
], TransmissionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("pagination"),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], TransmissionController.prototype, "findAllByPageination", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransmissionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransmissionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_transmission_dto_1.UpdateTransmissionDto]),
    __metadata("design:returntype", void 0)
], TransmissionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransmissionController.prototype, "remove", null);
exports.TransmissionController = TransmissionController = __decorate([
    (0, common_1.Controller)('transmission'),
    __metadata("design:paramtypes", [transmission_service_1.TransmissionService])
], TransmissionController);
//# sourceMappingURL=transmission.controller.js.map