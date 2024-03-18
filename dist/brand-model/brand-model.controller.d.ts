import { BrandModelService } from './brand-model.service';
import { CreateBrandModelDto } from './dto/create-brand-model.dto';
import { UpdateBrandModelDto } from './dto/update-brand-model.dto';
export declare class BrandModelController {
    private readonly brandModelService;
    constructor(brandModelService: BrandModelService);
    create(createBrandModelDto: CreateBrandModelDto): Promise<string>;
    findAllByPageination(page: number, limit: number): Promise<{
        count: number;
        data: import("./entities/brand-model.entity").BrandModel[];
    }>;
    sortById(id: number): Promise<import("../brand-year/entities/brand-year.entity").BrandYear[]>;
    findAll(): Promise<import("./entities/brand-model.entity").BrandModel[]>;
    findOne(id: string): Promise<import("./entities/brand-model.entity").BrandModel>;
    update(id: string, updateBrandModelDto: UpdateBrandModelDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
