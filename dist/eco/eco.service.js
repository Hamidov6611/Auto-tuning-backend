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
exports.EcoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const brand_engine_entity_1 = require("../brand-engine/entities/brand-engine.entity");
const typeorm_2 = require("typeorm");
const eco_entity_1 = require("./entities/eco.entity");
let EcoService = class EcoService {
    constructor(engineRepository, ecoRepositiry) {
        this.engineRepository = engineRepository;
        this.ecoRepositiry = ecoRepositiry;
    }
    async create(CreateEcoDto) {
        const engine = await this.engineRepository.findOne({
            where: { id: CreateEcoDto.engine_id },
        });
        await this.ecoRepositiry.save({
            engine,
            after_nm: CreateEcoDto.after_nm,
            original_nm: CreateEcoDto.original_nm,
            percentage: CreateEcoDto.percentage,
            description: CreateEcoDto.description,
            price: CreateEcoDto.price,
        });
        return 'added successfully';
    }
    async findAllByPageination(page, limit) {
        const skip = (page - 1) * limit;
        const count = await this.ecoRepositiry.find({});
        const ecos = await this.ecoRepositiry.find({
            take: limit,
            skip: skip,
            order: { createdat: 'ASC' },
            relations: { engine: true }
        });
        return {
            count: count.length,
            data: ecos,
        };
    }
    async findAll() {
        return await this.ecoRepositiry.find({ relations: { engine: true } });
    }
    async findOne(id) {
        return await this.ecoRepositiry.findOne({ where: { id } });
    }
    async update(id, updateEcoDto) {
        return await this.ecoRepositiry.update({ id }, updateEcoDto);
    }
    async remove(id) {
        return await this.ecoRepositiry.delete(id);
    }
};
exports.EcoService = EcoService;
exports.EcoService = EcoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(brand_engine_entity_1.BrandEngine)),
    __param(1, (0, typeorm_1.InjectRepository)(eco_entity_1.Eco)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EcoService);
//# sourceMappingURL=eco.service.js.map