import { CreateStage1Dto } from './dto/create-stage1.dto';
import { UpdateStage1Dto } from './dto/update-stage1.dto';
import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { Repository } from 'typeorm';
import { Stage1 } from './entities/stage1.entity';
export declare class Stage1Service {
    private readonly engineRepository;
    private readonly stage1Repositiry;
    constructor(engineRepository: Repository<BrandEngine>, stage1Repositiry: Repository<Stage1>);
    create(createStage1Dto: CreateStage1Dto): Promise<string>;
    findByEngineId(id: number): Promise<Stage1[]>;
    findAllByPageination(page: number, limit: number): Promise<{
        count: number;
        data: Stage1[];
    }>;
    findAll(): Promise<Stage1[]>;
    findOne(id: number): Promise<Stage1[]>;
    update(id: number, updateStage1Dto: UpdateStage1Dto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
