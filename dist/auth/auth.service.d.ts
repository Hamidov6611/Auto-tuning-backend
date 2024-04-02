import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'src/admin/admin.service';
import { IAdmin } from 'src/types/types';
export declare class AuthService {
    private readonly adminService;
    private readonly jwtService;
    constructor(adminService: AdminService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<import("../admin/entities/admin.entity").Admin>;
    login(admin: IAdmin): Promise<{
        id: string;
        email: string;
        token: string;
    }>;
}
