import { CreateBrandYearDto } from './dto/create-brand-year.dto';
import { UpdateBrandYearDto } from './dto/update-brand-year.dto';
import { BrandModel } from 'src/brand-model/entities/brand-model.entity';
import { Repository } from 'typeorm';
import { BrandYear } from './entities/brand-year.entity';
export declare class BrandYearService {
    private readonly yearRepository;
    private readonly modelRepositiry;
    constructor(yearRepository: Repository<BrandYear>, modelRepositiry: Repository<BrandModel>);
    create(createBrandYearDto: CreateBrandYearDto): Promise<string>;
    findAllByPageination(page: number, limit: number): Promise<{
        count: number;
        data: BrandYear[];
    }>;
    findAll(): Promise<BrandYear[]>;
    findOne(id: number): Promise<BrandYear>;
    update(id: number, updateBrandYearDto: UpdateBrandYearDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
