import { CreateBrandEngineDto } from './dto/create-brand-engine.dto';
import { UpdateBrandEngineDto } from './dto/update-brand-engine.dto';
import { BrandEngine } from './entities/brand-engine.entity';
import { Repository } from 'typeorm';
import { BrandYear } from 'src/brand-year/entities/brand-year.entity';
export declare class BrandEngineService {
    private readonly engineRepository;
    private readonly yearRepositiry;
    constructor(engineRepository: Repository<BrandEngine>, yearRepositiry: Repository<BrandYear>);
    create(createBrandEngineDto: CreateBrandEngineDto): Promise<string>;
    findAllByPageination(page: number, limit: number): Promise<{
        count: number;
        data: BrandEngine[];
    }>;
    findAll(): Promise<BrandEngine[]>;
    findOne(id: number): Promise<BrandEngine>;
    update(id: number, updateBrandEngineDto: UpdateBrandEngineDto): Promise<string>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
