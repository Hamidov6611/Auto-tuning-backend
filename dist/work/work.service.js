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
exports.WorkService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const work_entity_1 = require("./entities/work.entity");
const typeorm_2 = require("typeorm");
const file_service_1 = require("../file/file.service");
const tag_entity_1 = require("../tag/entities/tag.entity");
let WorkService = class WorkService {
    constructor(workRepository, tagRepository, fileService) {
        this.workRepository = workRepository;
        this.tagRepository = tagRepository;
        this.fileService = fileService;
    }
    async create(createWorkDto, picture) {
        const tag = await this.tagRepository.findOne({
            where: {
                id: createWorkDto.tagId,
            },
        });
        const picturePath = this.fileService.createFile(file_service_1.FileType.IMAGE, picture);
        const news = await this.workRepository.save({
            ...createWorkDto,
            img: picturePath,
            tag
        });
        return news;
    }
    async findAll(page, limit) {
        const skip = (page - 1) * limit;
        const count = await this.workRepository.find({});
        const work = await this.workRepository.find({
            take: limit,
            skip: skip,
            relations: { tag: true },
            order: { createdAt: 'DESC' },
        });
        return {
            count: count.length,
            data: work,
        };
    }
    async findOne(id) {
        return await this.workRepository.findOne({
            where: {
                id,
            },
            relations: { tag: true },
        });
    }
    async update(id, updateWorkDto, picture) {
        if (picture) {
            const picturePath = this.fileService.updateFile(file_service_1.FileType.IMAGE, picture, updateWorkDto.img);
            const news = await this.workRepository.update({ id }, { ...updateWorkDto, img: picturePath });
            return news;
        }
        else {
            const result = await this.workRepository.update({ id }, updateWorkDto);
            return result;
        }
    }
    async remove(id) {
        await this.workRepository.delete(id);
        return 'deleted!';
    }
    async searchWorks(query) {
        const works = await this.workRepository
            .createQueryBuilder('work')
            .where('LOWER(work.title) LIKE LOWER(:query)', { query: `%${query}%` })
            .orWhere('LOWER(work.description) LIKE LOWER(:query)', {
            query: `%${query}%`,
        })
            .getMany();
        return {
            count: works.length,
            data: works,
        };
    }
};
exports.WorkService = WorkService;
exports.WorkService = WorkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(work_entity_1.Work)),
    __param(1, (0, typeorm_1.InjectRepository)(tag_entity_1.Tag)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        file_service_1.FileService])
], WorkService);
//# sourceMappingURL=work.service.js.map