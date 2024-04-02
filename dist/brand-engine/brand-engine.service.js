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
exports.BrandEngineService = void 0;
const common_1 = require("@nestjs/common");
const brand_engine_entity_1 = require("./entities/brand-engine.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const brand_year_entity_1 = require("../brand-year/entities/brand-year.entity");
let BrandEngineService = class BrandEngineService {
    constructor(engineRepository, yearRepositiry) {
        this.engineRepository = engineRepository;
        this.yearRepositiry = yearRepositiry;
    }
    async create(createBrandEngineDto) {
        const year = await this.yearRepositiry.findOne({
            where: { id: createBrandEngineDto.year_id },
        });
        await this.engineRepository.save({
            name: createBrandEngineDto.name,
            engine_hp: createBrandEngineDto.engine_hp,
            type_engine: createBrandEngineDto.type_engine,
            year,
        });
        return 'added successfully';
    }
    async findAllByPageination(page, limit) {
        const skip = (page - 1) * limit;
        const count = await this.engineRepository.find({});
        const catalogs = await this.engineRepository.find({
            take: limit,
            skip: skip,
            order: { createdat: 'ASC' },
            relations: { year: true },
        });
        return {
            count: count.length,
            data: catalogs,
        };
    }
    async findAll() {
        return await this.engineRepository.find({ relations: { year: true } });
    }
    async findOne(id) {
        return await this.engineRepository.findOne({ where: { id } });
    }
    async update(id, updateBrandEngineDto) {
        const engine = await this.engineRepository.findOne({ where: { id } });
        if (updateBrandEngineDto.name) {
            await this.engineRepository.update({ id }, { ...engine, name: updateBrandEngineDto.name });
        }
        return `Updated`;
    }
    async remove(id) {
        return await this.engineRepository.delete(id);
    }
};
exports.BrandEngineService = BrandEngineService;
exports.BrandEngineService = BrandEngineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(brand_engine_entity_1.BrandEngine)),
    __param(1, (0, typeorm_2.InjectRepository)(brand_year_entity_1.BrandYear)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], BrandEngineService);
//# sourceMappingURL=brand-engine.service.js.map