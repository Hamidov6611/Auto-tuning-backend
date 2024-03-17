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
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const brand_entity_1 = require("./entities/brand.entity");
const typeorm_2 = require("typeorm");
const file_service_1 = require("../file/file.service");
const catalog_entity_1 = require("../catalog/entities/catalog.entity");
let BrandService = class BrandService {
    constructor(brandRepository, catalogRepositiry, fileService) {
        this.brandRepository = brandRepository;
        this.catalogRepositiry = catalogRepositiry;
        this.fileService = fileService;
    }
    async create(createBrandDto, picture) {
        const catalog = await this.catalogRepositiry.findOne({
            where: { id: createBrandDto.catalog_id },
        });
        const picturePath = this.fileService.createFile(file_service_1.FileType.IMAGE, picture);
        await this.brandRepository.save({
            ...createBrandDto,
            img: picturePath,
            catalog,
        });
        return 'added successfully';
    }
    async findAll(page, limit) {
        const skip = (page - 1) * limit;
        const count = await this.brandRepository.find({});
        const catalogs = await this.brandRepository.find({
            take: limit,
            skip: skip,
            order: { createdat: 'DESC' },
            relations: { catalog: true },
        });
        return {
            count: count.length,
            data: catalogs,
        };
    }
    async getAll(id) {
        const catalog = await this.catalogRepositiry.findOne({ where: { id } });
        const brand = await this.brandRepository.find({
            where: { catalog: catalog },
            order: { title: 'ASC' },
        });
        return brand;
    }
    async findOne(id) {
        return await this.brandRepository.findOne({
            where: { id },
            relations: { catalog: true },
        });
    }
    async update(id, updateBrandDto, picture) {
        const catalog = await this.catalogRepositiry.findOne({
            where: { id: updateBrandDto?.catalog_id },
        });
        if (picture) {
            const picturePath = this.fileService.updateFile(file_service_1.FileType.IMAGE, picture, updateBrandDto.img);
            const brand = await this.brandRepository.update({ id }, {
                title: updateBrandDto.title,
                img: picturePath,
                catalog,
            });
            return brand;
        }
        else {
            const result = await this.brandRepository.update(id, {
                title: updateBrandDto.title,
                catalog,
            });
            return result;
        }
    }
    async remove(id) {
        const catalog = await this.brandRepository.findOne({
            where: { id },
        });
        this.fileService.removeFile(catalog.img);
        await this.brandRepository.delete(id);
        return 'deleted!';
    }
};
exports.BrandService = BrandService;
exports.BrandService = BrandService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(brand_entity_1.Brand)),
    __param(1, (0, typeorm_1.InjectRepository)(catalog_entity_1.Catalog)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        file_service_1.FileService])
], BrandService);
//# sourceMappingURL=brand.service.js.map