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
exports.ParsingCarMakesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const parsing_car_entity_1 = require("../parsing_cars/entities/parsing_car.entity");
const typeorm_2 = require("typeorm");
const parsing_car_make_entity_1 = require("./entities/parsing_car_make.entity");
let ParsingCarMakesService = class ParsingCarMakesService {
    constructor(parsingCarRepository, parsingCarMakeRepository) {
        this.parsingCarRepository = parsingCarRepository;
        this.parsingCarMakeRepository = parsingCarMakeRepository;
    }
    create(createParsingCarMakeDto) {
        return 'This action adds a new parsingCarMake';
    }
    async findAll() {
        return await this.parsingCarMakeRepository.find({
            relations: { parent_id: true },
        });
    }
    async findOne(id) {
        return await this.parsingCarMakeRepository.findOne({
            where: { id },
            relations: { parsing_car_makes_years_id: true }
        });
    }
    update(id, updateParsingCarMakeDto) {
        return `This action updates a #${id} parsingCarMake`;
    }
    remove(id) {
        return `This action removes a #${id} parsingCarMake`;
    }
};
exports.ParsingCarMakesService = ParsingCarMakesService;
exports.ParsingCarMakesService = ParsingCarMakesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(parsing_car_entity_1.ParsingCar)),
    __param(1, (0, typeorm_1.InjectRepository)(parsing_car_make_entity_1.ParsingCarMake)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ParsingCarMakesService);
//# sourceMappingURL=parsing_car_makes.service.js.map