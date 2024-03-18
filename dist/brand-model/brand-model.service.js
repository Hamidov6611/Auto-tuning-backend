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
exports.BrandModelService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const brand_entity_1 = require("../brand/entities/brand.entity");
const typeorm_2 = require("typeorm");
const brand_model_entity_1 = require("./entities/brand-model.entity");
let BrandModelService = class BrandModelService {
    constructor(brandRepository, modelRepositiry) {
        this.brandRepository = brandRepository;
        this.modelRepositiry = modelRepositiry;
    }
    async create(createBrandModelDto) {
        const brand = await this.brandRepository.findOne({
            where: { id: createBrandModelDto.brand_id },
        });
        console.log(brand);
        await this.modelRepositiry.save({
            title: createBrandModelDto.title,
            brand,
        });
        return 'added successfully';
    }
    async sortByModel(id) {
        const models = await this.modelRepositiry.find({
            where: { id },
            relations: { year: true },
        });
        return models[0]?.year;
    }
    async findAll() {
        return await this.modelRepositiry.find({ relations: { brand: true } });
    }
    async findAllByPageination(page, limit) {
        const skip = (page - 1) * limit;
        const count = await this.modelRepositiry.find({});
        const models = await this.modelRepositiry.find({
            take: limit,
            skip: skip,
            relations: { brand: true },
            order: { createdat: 'ASC' },
        });
        return {
            count: count.length,
            data: models,
        };
    }
    async findOne(id) {
        return await this.modelRepositiry.findOne({ where: { id } });
    }
    async update(id, updateBrandModelDto) {
        return await this.modelRepositiry.update({ id }, updateBrandModelDto);
    }
    async remove(id) {
        return await this.modelRepositiry.delete(id);
    }
};
exports.BrandModelService = BrandModelService;
exports.BrandModelService = BrandModelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(brand_entity_1.Brand)),
    __param(1, (0, typeorm_1.InjectRepository)(brand_model_entity_1.BrandModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BrandModelService);
//# sourceMappingURL=brand-model.service.js.map