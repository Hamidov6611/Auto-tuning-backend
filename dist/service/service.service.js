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
exports.ServiceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const service_entity_1 = require("./entities/service.entity");
const typeorm_2 = require("typeorm");
const file_service_1 = require("../file/file.service");
const category_entity_1 = require("../category/entities/category.entity");
let ServiceService = class ServiceService {
    constructor(serviceRepository, categoryRepository, fileService) {
        this.serviceRepository = serviceRepository;
        this.categoryRepository = categoryRepository;
        this.fileService = fileService;
    }
    async create(createServiceDto, picture) {
        const picturePath = this.fileService.createFile(file_service_1.FileType.IMAGE, picture);
        const service = await this.serviceRepository.save({
            ...createServiceDto,
            img: picturePath,
        });
        return service;
    }
    async findAll(page, limit) {
        const skip = (page - 1) * limit;
        const count = await this.serviceRepository.find({});
        const service = await this.serviceRepository.find({
            take: limit,
            skip: skip,
            order: { createdAt: 'DESC' },
            relations: {
                category: true,
            },
        });
        return {
            count: count.length,
            data: service,
        };
    }
    async findOne(id) {
        return await this.serviceRepository.findOne({
            where: {
                id,
            },
            relations: {
                category: true,
            },
        });
    }
    async update(id, updateServiceDto, picture) {
        const category = await this.categoryRepository.findOne({
            where: { id }
        });
        console.log(id);
        if (picture) {
            const picturePath = this.fileService.updateFile(file_service_1.FileType.IMAGE, picture, updateServiceDto.img);
            const service = await this.serviceRepository.update({ id }, {
                title: updateServiceDto.title,
                price: updateServiceDto.price,
                category,
                img: picturePath,
            });
            return service;
        }
        else {
            const result = await this.serviceRepository.update(id, {
                title: updateServiceDto.title,
                price: updateServiceDto.price,
                category,
            });
            return result;
        }
    }
    async remove(id) {
        await this.serviceRepository.delete(id);
        return 'Deleted successfully';
    }
    async findByCategory(id) {
        try {
            const res = await this.serviceRepository.find({
                where: {
                    category: { id },
                },
            });
            if (!res) {
                throw new common_1.BadRequestException('This service not found!');
            }
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
    async allService() {
        const service = await this.serviceRepository.find({});
        return service;
    }
};
exports.ServiceService = ServiceService;
exports.ServiceService = ServiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(service_entity_1.Service)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        file_service_1.FileService])
], ServiceService);
//# sourceMappingURL=service.service.js.map