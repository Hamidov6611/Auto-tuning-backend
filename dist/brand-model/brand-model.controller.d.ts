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
    findAll(): Promise<import("./entities/brand-model.entity").BrandModel[]>;
    findOne(id: string): Promise<import("./entities/brand-model.entity").BrandModel>;
    update(id: string, updateBrandModelDto: UpdateBrandModelDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
