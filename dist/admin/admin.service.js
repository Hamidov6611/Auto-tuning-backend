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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const admin_entity_1 = require("./entities/admin.entity");
const argon2 = require("argon2");
const jwt_1 = require("@nestjs/jwt");
let AdminService = class AdminService {
    constructor(adminRepository, jwtService) {
        this.adminRepository = adminRepository;
        this.jwtService = jwtService;
    }
    async create(createAdminDto) {
        const existuser = await this.adminRepository.findOne({
            where: {
                email: createAdminDto.email,
            },
        });
        if (existuser)
            throw new common_1.BadRequestException('This email already exist');
        const admin = await this.adminRepository.save({
            username: createAdminDto.username,
            email: createAdminDto.email,
            password: await argon2.hash(createAdminDto.password),
        });
        const token = this.jwtService.sign({ email: createAdminDto.email });
        return { admin, token };
    }
    async findOne(email) {
        return await this.adminRepository.findOne({ where: { email } });
    }
    async login(user) {
        const admin = await this.adminRepository.findOne({
            where: {
                username: user.username,
            },
        });
        const isAdmin = await argon2.verify(admin.password, user.password);
        if (!isAdmin)
            throw new common_1.BadRequestException('This admin not found!');
        const token = this.jwtService.sign({
            username: admin.username,
            email: admin.email,
        });
        return { token };
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_entity_1.Admin)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AdminService);
//# sourceMappingURL=admin.service.js.map