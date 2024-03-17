import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(createAdminDto: CreateAdminDto): Promise<{
        admin: {
            username: string;
            email: string;
            password: string;
        } & import("./entities/admin.entity").Admin;
        token: string;
    }>;
    login(username: {
        username: string;
        password: string;
    }): Promise<{
        token: string;
    }>;
}
