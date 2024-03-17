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
exports.StockService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const file_service_1 = require("../file/file.service");
const stock_entity_1 = require("./entities/stock.entity");
let StockService = class StockService {
    constructor(stockRepository, fileService) {
        this.stockRepository = stockRepository;
        this.fileService = fileService;
    }
    async create(createStockDto, picture) {
        const picturePath = this.fileService.createFile(file_service_1.FileType.IMAGE, picture);
        const stock = await this.stockRepository.save({
            ...createStockDto,
            img: picturePath,
        });
        return stock;
    }
    async findAll(page, limit) {
        const skip = (page - 1) * limit;
        const count = await this.stockRepository.find({});
        const stock = await this.stockRepository.find({
            take: limit,
            skip: skip,
            order: { createdAt: 'DESC' },
        });
        return {
            count: count.length,
            data: stock,
        };
    }
    async findOne(id) {
        return await this.stockRepository.find({
            where: {
                id,
            },
        });
    }
    async update(id, updateStockDto, picture) {
        if (picture) {
            const picturePath = this.fileService.updateFile(file_service_1.FileType.IMAGE, picture, updateStockDto.img);
            const stock = await this.stockRepository.update({ id }, { ...updateStockDto, img: picturePath });
            return stock;
        }
        else {
            const result = await this.stockRepository.update({ id }, updateStockDto);
            return result;
        }
    }
    async remove(id) {
        const stock = await this.stockRepository.findOne({
            where: { id },
        });
        this.fileService.removeFile(stock.img);
        await this.stockRepository.delete(id);
        return 'deleted!';
    }
};
exports.StockService = StockService;
exports.StockService = StockService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(stock_entity_1.Stock)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        file_service_1.FileService])
], StockService);
//# sourceMappingURL=stock.service.js.map