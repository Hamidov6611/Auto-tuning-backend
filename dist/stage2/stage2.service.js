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
exports.Stage2Service = void 0;
const common_1 = require("@nestjs/common");
const brand_engine_entity_1 = require("../brand-engine/entities/brand-engine.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const stage2_entity_1 = require("./entities/stage2.entity");
let Stage2Service = class Stage2Service {
    constructor(engineRepository, stage2Repositiry) {
        this.engineRepository = engineRepository;
        this.stage2Repositiry = stage2Repositiry;
    }
    async create(createStage2Dto) {
        const engine = await this.engineRepository.findOne({
            where: { id: createStage2Dto.engine_id },
        });
        await this.stage2Repositiry.save({
            engine,
            original_nm: createStage2Dto.original_nm,
            after_nm: createStage2Dto.after_nm,
            original_hp: createStage2Dto.original_hp,
            after_hp: createStage2Dto.after_hp,
            price: createStage2Dto.price,
            description: createStage2Dto.description,
            exception: createStage2Dto.exception,
        });
        return 'added successfully';
    }
    async findAllByPageination(page, limit) {
        const skip = (page - 1) * limit;
        const count = await this.stage2Repositiry.find({});
        const stage1 = await this.stage2Repositiry.find({
            take: limit,
            skip: skip,
            order: { createdat: 'ASC' },
        });
        return {
            count: count.length,
            data: stage1,
        };
    }
    async findAll() {
        return await this.stage2Repositiry.find({ relations: { engine: true } });
    }
    async findOne(id) {
        return this.stage2Repositiry.find({
            where: { id },
            relations: { engine: true },
        });
    }
    async update(id, updateStage1Dto) {
        return this.stage2Repositiry.update({ id }, updateStage1Dto);
    }
    async remove(id) {
        return await this.stage2Repositiry.delete(id);
    }
};
exports.Stage2Service = Stage2Service;
exports.Stage2Service = Stage2Service = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(brand_engine_entity_1.BrandEngine)),
    __param(1, (0, typeorm_2.InjectRepository)(stage2_entity_1.Stage2)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], Stage2Service);
//# sourceMappingURL=stage2.service.js.map