import { CreateBrandModelDto } from './dto/create-brand-model.dto';
import { UpdateBrandModelDto } from './dto/update-brand-model.dto';
import { Brand } from 'src/brand/entities/brand.entity';
import { Repository } from 'typeorm';
import { BrandModel } from './entities/brand-model.entity';
export declare class BrandModelService {
    private readonly brandRepository;
    private readonly modelRepositiry;
    constructor(brandRepository: Repository<Brand>, modelRepositiry: Repository<BrandModel>);
    create(createBrandModelDto: CreateBrandModelDto): Promise<string>;
    findAll(): Promise<BrandModel[]>;
    findAllByPageination(page: number, limit: number): Promise<{
        count: number;
        data: BrandModel[];
    }>;
    findOne(id: number): Promise<BrandModel>;
    update(id: number, updateBrandModelDto: UpdateBrandModelDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
