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
    sortByModel(id: number): Promise<import("../brand-year/entities/brand-year.entity").BrandYear[]>;
    findAll(): Promise<BrandModel[]>;
    findAllByPageination(page: number, limit: number): Promise<{
        count: number;
        data: BrandModel[];
    }>;
    findOne(id: number): Promise<BrandModel>;
    update(id: number, updateBrandModelDto: UpdateBrandModelDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
