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
exports.RcPlusService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const brand_engine_entity_1 = require("../brand-engine/entities/brand-engine.entity");
const typeorm_2 = require("typeorm");
const rc_plus_entity_1 = require("./entities/rc-plus.entity");
let RcPlusService = class RcPlusService {
    constructor(engineRepository, rcRepositiry) {
        this.engineRepository = engineRepository;
        this.rcRepositiry = rcRepositiry;
    }
    async create(createRcPlusDto) {
        const engine = await this.engineRepository.findOne({
            where: { id: createRcPlusDto.engine_id },
        });
        await this.rcRepositiry.save({
            engine,
            title: createRcPlusDto.title,
            description: createRcPlusDto.description,
            hero: createRcPlusDto.hero,
        });
        return 'added successfully';
    }
    async findByEngineId(id) {
        const engine = await this.engineRepository.findOne({
            where: { id },
            relations: ['rc_plus'],
        });
        if (!engine) {
            throw new Error('Engine not found');
        }
        return engine.rc_plus;
    }
    async findAllByPageination(page, limit) {
        const skip = (page - 1) * limit;
        const count = await this.rcRepositiry.find({});
        const rc = await this.rcRepositiry.find({
            take: limit,
            skip: skip,
            order: { createdat: 'ASC' },
            relations: { engine: true },
        });
        return {
            count: count.length,
            data: rc,
        };
    }
    async findAll() {
        return await this.rcRepositiry.find({ relations: { engine: true } });
    }
    async findOne(id) {
        return await this.rcRepositiry.findOne({
            where: { id },
            relations: { engine: true },
        });
    }
    async update(id, updateRcPlusDto) {
        return await this.rcRepositiry.update({ id }, updateRcPlusDto);
    }
    async remove(id) {
        return await this.rcRepositiry.delete(id);
    }
};
exports.RcPlusService = RcPlusService;
exports.RcPlusService = RcPlusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(brand_engine_entity_1.BrandEngine)),
    __param(1, (0, typeorm_1.InjectRepository)(rc_plus_entity_1.RcPlus)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RcPlusService);
//# sourceMappingURL=rc-plus.service.js.map