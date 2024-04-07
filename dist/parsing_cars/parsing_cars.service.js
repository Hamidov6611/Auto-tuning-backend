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
exports.ParsingCarsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const parsing_car_entity_1 = require("./entities/parsing_car.entity");
const typeorm_2 = require("typeorm");
let ParsingCarsService = class ParsingCarsService {
    constructor(parsingCarRepository) {
        this.parsingCarRepository = parsingCarRepository;
    }
    create(createParsingCarDto) {
        return 'This action adds a new parsingCar';
    }
    async findAll() {
        return await this.parsingCarRepository.find({
            relations: { parsing_make_id: true },
        });
    }
    async findOne(id) {
        return await this.parsingCarRepository.findOne({
            where: {
                id,
            },
            relations: { parsing_make_id: true },
        });
    }
    update(id, updateParsingCarDto) {
        return `This action updates a #${id} parsingCar`;
    }
    remove(id) {
        return `This action removes a #${id} parsingCar`;
    }
};
exports.ParsingCarsService = ParsingCarsService;
exports.ParsingCarsService = ParsingCarsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(parsing_car_entity_1.ParsingCar)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ParsingCarsService);
//# sourceMappingURL=parsing_cars.service.js.map