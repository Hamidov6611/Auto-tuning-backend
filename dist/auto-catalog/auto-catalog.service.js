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
exports.AutoCatalogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auto_catalog_entity_1 = require("./entities/auto-catalog.entity");
const typeorm_2 = require("typeorm");
const file_service_1 = require("../file/file.service");
const auto_model_entity_1 = require("../auto-model/entities/auto-model.entity");
let AutoCatalogService = class AutoCatalogService {
    constructor(catalogRepository, autoModelRepository, fileService) {
        this.catalogRepository = catalogRepository;
        this.autoModelRepository = autoModelRepository;
        this.fileService = fileService;
    }
    async create(createAutoCatalogDto, picture, video) {
        const picturePath = this.fileService.createFile(file_service_1.FileType.IMAGE, picture);
        const videoPath = this.fileService.createFile(file_service_1.FileType.VIDEO, video);
        const catalog = await this.catalogRepository.save({
            ...createAutoCatalogDto,
            img: picturePath,
            video: videoPath,
        });
        return catalog;
    }
    async findAll(page, limit) {
        const skip = (page - 1) * limit;
        const count = await this.catalogRepository.find({});
        const catalog = await this.catalogRepository.find({
            take: limit,
            skip: skip,
            order: { createdat: 'DESC' },
            relations: { model: true },
        });
        return {
            count: count.length,
            data: catalog,
        };
    }
    async getCatalogByModel(modelId) {
        const catalog = await this.catalogRepository.find({
            relations: { model: true },
        });
        let a = catalog?.map((c) => {
            if (c?.model?.id == parseInt(modelId)) {
                return c;
            }
            else {
                throw new common_1.BadRequestException('This catalogs not found');
            }
        });
        return a;
    }
    async findOne(id) {
        return await this.catalogRepository.findOne({
            where: { id },
            relations: { model: true },
        });
    }
    async update(id, updateAutoCatalogDto, picture, video) {
        try {
            const model = await this.autoModelRepository.findOne({
                where: { id: updateAutoCatalogDto.modelId },
            });
            if (picture || video) {
                if (picture) {
                    const picturePath = this.fileService.updateFile(file_service_1.FileType.IMAGE, picture, updateAutoCatalogDto.img);
                    await this.catalogRepository.update({ id }, {
                        title: updateAutoCatalogDto.title,
                        price: updateAutoCatalogDto.price,
                        model,
                        img: picturePath,
                    });
                }
                if (video) {
                    const videoPath = this.fileService.updateFile(file_service_1.FileType.VIDEO, video, updateAutoCatalogDto.video);
                    await this.catalogRepository.update({ id }, {
                        title: updateAutoCatalogDto.title,
                        price: updateAutoCatalogDto.price,
                        model,
                        video: videoPath,
                    });
                }
            }
            else {
                const result = await this.catalogRepository.update({ id }, {
                    title: updateAutoCatalogDto.title,
                    price: updateAutoCatalogDto.price,
                    model,
                });
                return result;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async remove(id) {
        const catalog = await this.catalogRepository.findOne({ where: { id } });
        this.fileService.removeFile(catalog.img);
        this.fileService.removeFile(catalog.video);
        return await this.catalogRepository.delete(id);
    }
};
exports.AutoCatalogService = AutoCatalogService;
exports.AutoCatalogService = AutoCatalogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(auto_catalog_entity_1.AutoCatalog)),
    __param(1, (0, typeorm_1.InjectRepository)(auto_model_entity_1.AutoModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        file_service_1.FileService])
], AutoCatalogService);
//# sourceMappingURL=auto-catalog.service.js.map