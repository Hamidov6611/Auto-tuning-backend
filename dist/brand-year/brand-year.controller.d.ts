import { BrandYearService } from './brand-year.service';
import { CreateBrandYearDto } from './dto/create-brand-year.dto';
import { UpdateBrandYearDto } from './dto/update-brand-year.dto';
export declare class BrandYearController {
    private readonly brandYearService;
    constructor(brandYearService: BrandYearService);
    create(createBrandYearDto: CreateBrandYearDto): Promise<string>;
    findAllByPageination(page: number, limit: number): Promise<{
        count: number;
        data: import("./entities/brand-year.entity").BrandYear[];
    }>;
    sortById(id: number): Promise<import("../brand-engine/entities/brand-engine.entity").BrandEngine[]>;
    findAll(): Promise<import("./entities/brand-year.entity").BrandYear[]>;
    findOne(id: string): Promise<import("./entities/brand-year.entity").BrandYear>;
    update(id: string, updateBrandYearDto: UpdateBrandYearDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
