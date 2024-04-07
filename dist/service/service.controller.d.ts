import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServiceController {
    private readonly serviceService;
    constructor(serviceService: ServiceService);
    create(files: any, createServiceDto: CreateServiceDto): Promise<{
        img: string;
        title: string;
        category: import("../category/entities/category.entity").Category;
        price: number;
    } & import("./entities/service.entity").Service>;
    findByCategory(id: number): Promise<import("./entities/service.entity").Service[]>;
    allService(): Promise<import("./entities/service.entity").Service[]>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: import("./entities/service.entity").Service[];
    }>;
    findOne(id: string): Promise<import("./entities/service.entity").Service>;
    update(updateServiceDto: UpdateServiceDto, id: number, files: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<string>;
}
