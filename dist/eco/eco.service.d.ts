import { CreateEcoDto } from './dto/create-eco.dto';
import { UpdateEcoDto } from './dto/update-eco.dto';
import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { Repository } from 'typeorm';
import { Eco } from './entities/eco.entity';
export declare class EcoService {
    private readonly engineRepository;
    private readonly ecoRepositiry;
    constructor(engineRepository: Repository<BrandEngine>, ecoRepositiry: Repository<Eco>);
    create(CreateEcoDto: CreateEcoDto): Promise<string>;
    findAllByPageination(page: number, limit: number): Promise<{
        count: number;
        data: Eco[];
    }>;
    findByEngineId(id: number): Promise<Eco[]>;
    findAll(): Promise<Eco[]>;
    findOne(id: number): Promise<Eco>;
    update(id: number, updateEcoDto: UpdateEcoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
