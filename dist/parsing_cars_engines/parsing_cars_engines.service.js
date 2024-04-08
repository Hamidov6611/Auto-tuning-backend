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
exports.ParsingCarsEnginesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const parsing_car_makes_year_entity_1 = require("../parsing_car_makes_years/entities/parsing_car_makes_year.entity");
const typeorm_2 = require("typeorm");
const parsing_cars_engine_entity_1 = require("./entities/parsing_cars_engine.entity");
let ParsingCarsEnginesService = class ParsingCarsEnginesService {
    constructor(parsingCarMakeYearRepository, parsingCarEngineRepository) {
        this.parsingCarMakeYearRepository = parsingCarMakeYearRepository;
        this.parsingCarEngineRepository = parsingCarEngineRepository;
    }
    create(createParsingCarsEngineDto) {
        return 'This action adds a new parsingCarsEngine';
    }
    async findAll() {
        return await this.parsingCarEngineRepository.find({
            relations: { parent_id: true },
        });
    }
    async findOne(id) {
        return await this.parsingCarEngineRepository.findOne({
            where: { id },
            relations: { tuning_id: true },
        });
    }
    update(id, updateParsingCarsEngineDto) {
        return `This action updates a #${id} parsingCarsEngine`;
    }
    remove(id) {
        return `This action removes a #${id} parsingCarsEngine`;
    }
};
exports.ParsingCarsEnginesService = ParsingCarsEnginesService;
exports.ParsingCarsEnginesService = ParsingCarsEnginesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(parsing_car_makes_year_entity_1.ParsingCarMakesYear)),
    __param(1, (0, typeorm_1.InjectRepository)(parsing_cars_engine_entity_1.ParsingCarsEngine)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ParsingCarsEnginesService);
//# sourceMappingURL=parsing_cars_engines.service.js.map