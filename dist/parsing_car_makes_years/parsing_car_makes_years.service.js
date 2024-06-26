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
exports.ParsingCarMakesYearsService = void 0;
const common_1 = require("@nestjs/common");
const parsing_car_make_entity_1 = require("../parsing_car_makes/entities/parsing_car_make.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const parsing_car_makes_year_entity_1 = require("./entities/parsing_car_makes_year.entity");
let ParsingCarMakesYearsService = class ParsingCarMakesYearsService {
    constructor(parsingCarMakeYearRepository, parsingCarMakeRepository) {
        this.parsingCarMakeYearRepository = parsingCarMakeYearRepository;
        this.parsingCarMakeRepository = parsingCarMakeRepository;
    }
    create(createParsingCarMakesYearDto) {
        return 'This action adds a new parsingCarMakesYear';
    }
    async findAll() {
        return await this.parsingCarMakeYearRepository.find({
            relations: { parent_id: true },
        });
    }
    async findOne(id) {
        return await this.parsingCarMakeYearRepository.findOne({
            where: { id },
            relations: { parsing_engine_id: true }
        });
    }
    update(id, updateParsingCarMakesYearDto) {
        return `This action updates a #${id} parsingCarMakesYear`;
    }
    remove(id) {
        return `This action removes a #${id} parsingCarMakesYear`;
    }
};
exports.ParsingCarMakesYearsService = ParsingCarMakesYearsService;
exports.ParsingCarMakesYearsService = ParsingCarMakesYearsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(parsing_car_makes_year_entity_1.ParsingCarMakesYear)),
    __param(1, (0, typeorm_2.InjectRepository)(parsing_car_make_entity_1.ParsingCarMake)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], ParsingCarMakesYearsService);
//# sourceMappingURL=parsing_car_makes_years.service.js.map