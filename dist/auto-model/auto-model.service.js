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
exports.AutoModelService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auto_model_entity_1 = require("./entities/auto-model.entity");
const typeorm_2 = require("typeorm");
const file_service_1 = require("../file/file.service");
let AutoModelService = class AutoModelService {
    constructor(autoModelRepository, fileService) {
        this.autoModelRepository = autoModelRepository;
        this.fileService = fileService;
    }
    async create(createAutoModelDto, picture) {
        const picturePath = this.fileService.createFile(file_service_1.FileType.IMAGE, picture);
        const model = await this.autoModelRepository.save({
            ...createAutoModelDto,
            img: picturePath,
        });
        return model;
    }
    async findAll(page, limit) {
        const skip = (page - 1) * limit;
        const count = await this.autoModelRepository.find({});
        const model = await this.autoModelRepository.find({
            take: limit,
            skip: skip,
            order: { createdat: 'DESC' },
        });
        return {
            count: count.length,
            data: model,
        };
    }
    async getAllModel() {
        return await this.autoModelRepository.find({});
    }
    async findOne(id) {
        return await this.autoModelRepository.findOne({ where: { id } });
    }
    async update(id, updateAutoModelDto, picture) {
        if (picture) {
            const picturePath = this.fileService.updateFile(file_service_1.FileType.IMAGE, picture, updateAutoModelDto.img);
            const autoModel = await this.autoModelRepository.update({ id }, { ...updateAutoModelDto, img: picturePath });
            return autoModel;
        }
        else {
            const autoModel = await this.autoModelRepository.update({ id }, updateAutoModelDto);
        }
    }
    async remove(id) {
        const model = await this.autoModelRepository.findOne({ where: { id } });
        this.fileService.removeFile(model.img);
        return await this.autoModelRepository.delete(id);
    }
};
exports.AutoModelService = AutoModelService;
exports.AutoModelService = AutoModelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(auto_model_entity_1.AutoModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        file_service_1.FileService])
], AutoModelService);
//# sourceMappingURL=auto-model.service.js.map