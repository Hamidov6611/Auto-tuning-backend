import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';
import { FileService } from 'src/file/file.service';
import { Category } from 'src/category/entities/category.entity';
export declare class ServiceService {
    private readonly serviceRepository;
    private readonly categoryRepository;
    private fileService;
    constructor(serviceRepository: Repository<Service>, categoryRepository: Repository<Category>, fileService: FileService);
    create(createServiceDto: CreateServiceDto, picture: any): Promise<{
        img: string;
        title: string;
        category: Category;
        price: number;
    } & Service>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: Service[];
    }>;
    findOne(id: number): Promise<Service>;
    update(id: number, updateServiceDto: UpdateServiceDto, picture: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<string>;
    findByCategory(id: number): Promise<Service[]>;
    allService(): Promise<Service[]>;
}
