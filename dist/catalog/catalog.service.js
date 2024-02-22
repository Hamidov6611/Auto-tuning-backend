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
exports.CatalogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const catalog_entity_1 = require("./entities/catalog.entity");
const typeorm_2 = require("typeorm");
const file_service_1 = require("../file/file.service");
let CatalogService = class CatalogService {
    constructor(catalogRepository, fileService) {
        this.catalogRepository = catalogRepository;
        this.fileService = fileService;
    }
    async create(createCatalogDto, picture) {
        const picturePath = this.fileService.createFile(file_service_1.FileType.IMAGE, picture);
        const catalog = await this.catalogRepository.save({
            ...createCatalogDto,
            img: picturePath,
        });
        return catalog;
    }
    async findAll(page, limit) {
        const skip = (page - 1) * limit;
        const count = await this.catalogRepository.find({});
        const catalogs = await this.catalogRepository.find({
            take: limit,
            skip: skip,
            order: { createdat: 'ASC' },
        });
        return {
            count: count.length,
            data: catalogs,
        };
    }
    async findOne(id) {
        return await this.catalogRepository.findOne({ where: { id } });
    }
    async update(id, updateCatalogDto, picture) {
        if (picture) {
            const picturePath = this.fileService.updateFile(file_service_1.FileType.IMAGE, picture, updateCatalogDto.img);
            const catalogs = await this.catalogRepository.update({ id }, { ...updateCatalogDto, img: picturePath });
            return catalogs;
        }
        else {
            const result = await this.catalogRepository.update({ id }, updateCatalogDto);
            return result;
        }
    }
    async remove(id) {
        const catalog = await this.catalogRepository.findOne({
            where: { id },
        });
        this.fileService.removeFile(catalog.img);
        return await this.catalogRepository.delete(id);
    }
};
exports.CatalogService = CatalogService;
exports.CatalogService = CatalogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(catalog_entity_1.Catalog)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        file_service_1.FileService])
], CatalogService);
//# sourceMappingURL=catalog.service.js.map