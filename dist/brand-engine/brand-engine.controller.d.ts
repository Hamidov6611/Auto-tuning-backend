import { BrandEngineService } from './brand-engine.service';
import { CreateBrandEngineDto } from './dto/create-brand-engine.dto';
import { UpdateBrandEngineDto } from './dto/update-brand-engine.dto';
export declare class BrandEngineController {
    private readonly brandEngineService;
    constructor(brandEngineService: BrandEngineService);
    create(createBrandEngineDto: CreateBrandEngineDto): Promise<string>;
    findAllByPageination(page: number, limit: number): Promise<{
        count: number;
        data: import("./entities/brand-engine.entity").BrandEngine[];
    }>;
    findAll(): Promise<import("./entities/brand-engine.entity").BrandEngine[]>;
    findOne(id: string): Promise<import("./entities/brand-engine.entity").BrandEngine>;
    update(id: string, updateBrandEngineDto: UpdateBrandEngineDto): Promise<string>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
