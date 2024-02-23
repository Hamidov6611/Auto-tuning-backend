import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
export declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandService);
    create(files: any, createBrandDto: CreateBrandDto): Promise<string>;
    update(files: any, id: number, updateBrandDto: UpdateBrandDto): Promise<import("typeorm").UpdateResult>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: import("./entities/brand.entity").Brand[];
    }>;
    getAll(catalog_id: number): Promise<import("./entities/brand.entity").Brand[]>;
    findOne(id: string): Promise<import("./entities/brand.entity").Brand>;
    remove(id: string): Promise<string>;
}
