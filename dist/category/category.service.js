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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("./entities/category.entity");
const typeorm_2 = require("typeorm");
let CategoryService = class CategoryService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async create(createCategoryDto) {
        const isCategory = await this.categoryRepository.findOne({
            where: {
                title: createCategoryDto.title,
            },
        });
        if (isCategory) {
            throw new common_1.BadRequestException('This category already created!');
        }
        return await this.categoryRepository.save(createCategoryDto);
    }
    async findAll(page, limit) {
        const skip = (page - 1) * limit;
        const count = await this.categoryRepository.find({});
        const work = await this.categoryRepository.find({
            take: limit,
            skip: skip,
            order: {
                createdAt: 'ASC'
            },
        });
        return {
            count: count.length,
            data: work,
        };
    }
    async allCategory() {
        return await this.categoryRepository.find({});
    }
    async findOne(id) {
        const category = await this.categoryRepository.findOne({
            where: {
                id,
            },
        });
        if (category) {
            return category;
        }
        return 'This category not found';
    }
    async update(id, updateCategoryDto) {
        return await this.categoryRepository.update(id, updateCategoryDto);
    }
    async remove(id) {
        return await this.categoryRepository.delete(id);
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryService);
//# sourceMappingURL=category.service.js.map