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
exports.Stage1Service = void 0;
const common_1 = require("@nestjs/common");
const brand_engine_entity_1 = require("../brand-engine/entities/brand-engine.entity");
const typeorm_1 = require("typeorm");
const stage1_entity_1 = require("./entities/stage1.entity");
const typeorm_2 = require("@nestjs/typeorm");
let Stage1Service = class Stage1Service {
    constructor(engineRepository, stage1Repositiry) {
        this.engineRepository = engineRepository;
        this.stage1Repositiry = stage1Repositiry;
    }
    async create(createStage1Dto) {
        const engine = await this.engineRepository.findOne({
            where: { id: createStage1Dto.engine_id },
        });
        await this.stage1Repositiry.save({
            engine,
            original_nm: createStage1Dto.original_nm,
            after_nm: createStage1Dto.after_nm,
            original_hp: createStage1Dto.original_hp,
            after_hp: createStage1Dto.after_hp,
            price: createStage1Dto.price,
            description: createStage1Dto.description,
            exception: createStage1Dto.exception,
        });
        return 'added successfully';
    }
    async findByEngineId(id) {
        const engine = await this.engineRepository.findOne({ where: { id }, relations: ['stage_one'] });
        if (!engine) {
            throw new Error('Engine not found');
        }
        return engine.stage_one;
    }
    async findAllByPageination(page, limit) {
        const skip = (page - 1) * limit;
        const count = await this.stage1Repositiry.find({});
        const stage1 = await this.stage1Repositiry.find({
            take: limit,
            skip: skip,
            order: { createdat: 'ASC' },
            relations: { engine: true }
        });
        return {
            count: count.length,
            data: stage1,
        };
    }
    async findAll() {
        return await this.stage1Repositiry.find({ relations: { engine: true } });
    }
    async findOne(id) {
        return this.stage1Repositiry.find({
            where: { id },
            relations: { engine: true },
        });
    }
    async update(id, updateStage1Dto) {
        return this.stage1Repositiry.update({ id }, updateStage1Dto);
    }
    async remove(id) {
        return await this.stage1Repositiry.delete(id);
    }
};
exports.Stage1Service = Stage1Service;
exports.Stage1Service = Stage1Service = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(brand_engine_entity_1.BrandEngine)),
    __param(1, (0, typeorm_2.InjectRepository)(stage1_entity_1.Stage1)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], Stage1Service);
//# sourceMappingURL=stage1.service.js.map