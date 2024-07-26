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
exports.TransmissionService = void 0;
const common_1 = require("@nestjs/common");
const brand_engine_entity_1 = require("../brand-engine/entities/brand-engine.entity");
const typeorm_1 = require("typeorm");
const transmission_entity_1 = require("./entities/transmission.entity");
const typeorm_2 = require("@nestjs/typeorm");
let TransmissionService = class TransmissionService {
    constructor(engineRepository, transmissionRepositiry) {
        this.engineRepository = engineRepository;
        this.transmissionRepositiry = transmissionRepositiry;
    }
    async create(createTransmissionDto) {
        const engine = await this.engineRepository.findOne({
            where: { id: createTransmissionDto.engine_id },
        });
        await this.transmissionRepositiry.save({
            description: createTransmissionDto.description,
            list: createTransmissionDto.list,
            price: createTransmissionDto.price,
            engine,
        });
        return 'added successfully';
    }
    async findByEngineId(id) {
        const engine = await this.engineRepository.findOne({
            where: { id },
            relations: ['transmission'],
        });
        if (!engine) {
            throw new Error('Engine not found');
        }
        return engine.transmission;
    }
    async findAllByPageination(page, limit) {
        const skip = (page - 1) * limit;
        const count = await this.transmissionRepositiry.find({});
        const transmission = await this.transmissionRepositiry.find({
            take: limit,
            skip: skip,
            order: { createdat: 'ASC' },
            relations: { engine: true },
        });
        return {
            count: count.length,
            data: transmission,
        };
    }
    async findAll() {
        return await this.transmissionRepositiry.find({
            relations: { engine: true },
        });
    }
    async findOne(id) {
        return await this.transmissionRepositiry.findOne({ where: { id } });
    }
    async update(id, updateTransmissionDto) {
        return await this.transmissionRepositiry.update({ id }, updateTransmissionDto);
    }
    async remove(id) {
        return await this.transmissionRepositiry.delete(id);
    }
};
exports.TransmissionService = TransmissionService;
exports.TransmissionService = TransmissionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(brand_engine_entity_1.BrandEngine)),
    __param(1, (0, typeorm_2.InjectRepository)(transmission_entity_1.Transmission)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], TransmissionService);
//# sourceMappingURL=transmission.service.js.map