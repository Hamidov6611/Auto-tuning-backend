import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { Repository } from 'typeorm';
import { FileService } from 'src/file/file.service';
import { Catalog } from 'src/catalog/entities/catalog.entity';
export declare class BrandService {
    private readonly brandRepository;
    private readonly catalogRepositiry;
    private fileService;
    constructor(brandRepository: Repository<Brand>, catalogRepositiry: Repository<Catalog>, fileService: FileService);
    create(createBrandDto: CreateBrandDto, picture: string): Promise<string>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: Brand[];
    }>;
    getAll(id: number): Promise<Brand[]>;
    findOne(id: number): Promise<Brand>;
    update(id: number, updateBrandDto: UpdateBrandDto, picture: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<string>;
}
