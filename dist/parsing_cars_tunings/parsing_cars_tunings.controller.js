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
exports.ParsingCarsTuningsController = void 0;
const common_1 = require("@nestjs/common");
const parsing_cars_tunings_service_1 = require("./parsing_cars_tunings.service");
const create_parsing_cars_tuning_dto_1 = require("./dto/create-parsing_cars_tuning.dto");
const update_parsing_cars_tuning_dto_1 = require("./dto/update-parsing_cars_tuning.dto");
let ParsingCarsTuningsController = class ParsingCarsTuningsController {
    constructor(parsingCarsTuningsService) {
        this.parsingCarsTuningsService = parsingCarsTuningsService;
    }
    create(createParsingCarsTuningDto) {
        return this.parsingCarsTuningsService.create(createParsingCarsTuningDto);
    }
    findAll() {
        return this.parsingCarsTuningsService.findAll();
    }
    findOne(id) {
        return this.parsingCarsTuningsService.findOne(+id);
    }
    update(id, updateParsingCarsTuningDto) {
        return this.parsingCarsTuningsService.update(+id, updateParsingCarsTuningDto);
    }
    remove(id) {
        return this.parsingCarsTuningsService.remove(+id);
    }
};
exports.ParsingCarsTuningsController = ParsingCarsTuningsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_parsing_cars_tuning_dto_1.CreateParsingCarsTuningDto]),
    __metadata("design:returntype", void 0)
], ParsingCarsTuningsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParsingCarsTuningsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ParsingCarsTuningsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_parsing_cars_tuning_dto_1.UpdateParsingCarsTuningDto]),
    __metadata("design:returntype", void 0)
], ParsingCarsTuningsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ParsingCarsTuningsController.prototype, "remove", null);
exports.ParsingCarsTuningsController = ParsingCarsTuningsController = __decorate([
    (0, common_1.Controller)('parsing-cars-tunings'),
    __metadata("design:paramtypes", [parsing_cars_tunings_service_1.ParsingCarsTuningsService])
], ParsingCarsTuningsController);
//# sourceMappingURL=parsing_cars_tunings.controller.js.map