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
exports.ParsingCarMakesController = void 0;
const common_1 = require("@nestjs/common");
const parsing_car_makes_service_1 = require("./parsing_car_makes.service");
const update_parsing_car_make_dto_1 = require("./dto/update-parsing_car_make.dto");
let ParsingCarMakesController = class ParsingCarMakesController {
    constructor(parsingCarMakesService) {
        this.parsingCarMakesService = parsingCarMakesService;
    }
    findAll() {
        return this.parsingCarMakesService.findAll();
    }
    findOne(id) {
        return this.parsingCarMakesService.findOne(+id);
    }
    update(id, updateParsingCarMakeDto) {
        return this.parsingCarMakesService.update(+id, updateParsingCarMakeDto);
    }
    remove(id) {
        return this.parsingCarMakesService.remove(+id);
    }
};
exports.ParsingCarMakesController = ParsingCarMakesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParsingCarMakesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ParsingCarMakesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_parsing_car_make_dto_1.UpdateParsingCarMakeDto]),
    __metadata("design:returntype", void 0)
], ParsingCarMakesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ParsingCarMakesController.prototype, "remove", null);
exports.ParsingCarMakesController = ParsingCarMakesController = __decorate([
    (0, common_1.Controller)('parsing-car-makes'),
    __metadata("design:paramtypes", [parsing_car_makes_service_1.ParsingCarMakesService])
], ParsingCarMakesController);
//# sourceMappingURL=parsing_car_makes.controller.js.map