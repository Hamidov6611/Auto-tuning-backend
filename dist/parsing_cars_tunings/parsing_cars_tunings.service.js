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
exports.ParsingCarsTuningsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const parsing_cars_engine_entity_1 = require("../parsing_cars_engines/entities/parsing_cars_engine.entity");
const typeorm_2 = require("typeorm");
const parsing_cars_tuning_entity_1 = require("./entities/parsing_cars_tuning.entity");
let ParsingCarsTuningsService = class ParsingCarsTuningsService {
    constructor(parsingCarTuning, parsingCarEngineRepository) {
        this.parsingCarTuning = parsingCarTuning;
        this.parsingCarEngineRepository = parsingCarEngineRepository;
    }
    create(createParsingCarsTuningDto) {
        return 'This action adds a new parsingCarsTuning';
    }
    async findAll() {
        return await this.parsingCarTuning.find({});
    }
    async findOne(id) {
        return await this.parsingCarTuning.findOne({ where: { id }, relations: { tuning_statistic_id: true } });
    }
    update(id, updateParsingCarsTuningDto) {
        return `This action updates a #${id} parsingCarsTuning`;
    }
    remove(id) {
        return `This action removes a #${id} parsingCarsTuning`;
    }
};
exports.ParsingCarsTuningsService = ParsingCarsTuningsService;
exports.ParsingCarsTuningsService = ParsingCarsTuningsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(parsing_cars_tuning_entity_1.ParsingCarsTuning)),
    __param(1, (0, typeorm_1.InjectRepository)(parsing_cars_engine_entity_1.ParsingCarsEngine)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ParsingCarsTuningsService);
//# sourceMappingURL=parsing_cars_tunings.service.js.map