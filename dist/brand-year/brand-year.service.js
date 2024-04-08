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
exports.BrandYearService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const brand_model_entity_1 = require("../brand-model/entities/brand-model.entity");
const typeorm_2 = require("typeorm");
const brand_year_entity_1 = require("./entities/brand-year.entity");
let BrandYearService = class BrandYearService {
    constructor(yearRepository, modelRepositiry) {
        this.yearRepository = yearRepository;
        this.modelRepositiry = modelRepositiry;
    }
    async create(createBrandYearDto) {
        const model = await this.modelRepositiry.findOne({
            where: { id: createBrandYearDto.model_id },
        });
        console.log(model);
        await this.yearRepository.save({
            title: createBrandYearDto.title,
            model,
        });
        return 'added successfully';
    }
    async sortById(id) {
        const engine = await this.yearRepository?.find({
            where: { id },
            relations: { engine: true },
        });
        return engine[0]?.engine;
    }
    async findAllByPageination(page, limit) {
        const skip = (page - 1) * limit;
        const count = await this.yearRepository.find({});
        const years = await this.yearRepository.find({
            take: limit,
            skip: skip,
            relations: { model: true },
            order: { createdat: 'ASC' },
        });
        return {
            count: count.length,
            data: years,
        };
    }
    async findAll() {
        return await this.yearRepository.find({ relations: { model: true } });
    }
    async findOne(id) {
        return this.yearRepository.findOne({ where: { id } });
    }
    async update(id, updateBrandYearDto) {
        return await this.yearRepository.update({ id }, updateBrandYearDto);
    }
    async remove(id) {
        return await this.yearRepository.delete(id);
    }
};
exports.BrandYearService = BrandYearService;
exports.BrandYearService = BrandYearService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(brand_year_entity_1.BrandYear)),
    __param(1, (0, typeorm_1.InjectRepository)(brand_model_entity_1.BrandModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BrandYearService);
//# sourceMappingURL=brand-year.service.js.map