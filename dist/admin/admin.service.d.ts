import { CreateAdminDto } from './dto/create-admin.dto';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AdminService {
    private readonly adminRepository;
    private readonly jwtService;
    constructor(adminRepository: Repository<Admin>, jwtService: JwtService);
    create(createAdminDto: CreateAdminDto): Promise<{
        admin: {
            username: string;
            email: string;
            password: string;
        } & Admin;
        token: string;
    }>;
    findOne(email: string): Promise<Admin>;
    login(user: {
        username: string;
        password: string;
    }): Promise<{
        token: string;
    }>;
}
