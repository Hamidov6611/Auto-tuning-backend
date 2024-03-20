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
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const news_entity_1 = require("./entities/news.entity");
const typeorm_2 = require("typeorm");
const file_service_1 = require("../file/file.service");
let NewsService = class NewsService {
    constructor(newsRepository, fileService) {
        this.newsRepository = newsRepository;
        this.fileService = fileService;
    }
    async create(createNewsDto, picture) {
        const picturePath = this.fileService.createFile(file_service_1.FileType.IMAGE, picture);
        const news = await this.newsRepository.save({
            ...createNewsDto,
            img: picturePath,
        });
        return news;
    }
    async findAll(page, limit) {
        const skip = (page - 1) * limit;
        const count = await this.newsRepository.find({});
        const news = await this.newsRepository.find({
            take: limit,
            skip: skip,
            order: { createdAt: 'DESC' },
        });
        return {
            count: count.length,
            data: news,
        };
    }
    async findOne(id) {
        return await this.newsRepository.find({
            where: {
                id,
            },
        });
    }
    async update(id, updateNewsDto, picture) {
        if (picture) {
            const picturePath = this.fileService.updateFile(file_service_1.FileType.IMAGE, picture, updateNewsDto.img);
            const news = await this.newsRepository.update({ id }, { ...updateNewsDto, img: picturePath });
            return news;
        }
        else {
            const result = await this.newsRepository.update({ id }, updateNewsDto);
            return result;
        }
    }
    async remove(id) {
        const news = await this.newsRepository.findOne({
            where: { id },
        });
        this.fileService.removeFile(news.img);
        await this.newsRepository.delete(id);
        return 'deleted!';
    }
};
exports.NewsService = NewsService;
exports.NewsService = NewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(news_entity_1.News)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        file_service_1.FileService])
], NewsService);
//# sourceMappingURL=news.service.js.map