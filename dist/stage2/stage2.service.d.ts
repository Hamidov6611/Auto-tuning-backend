import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { Repository } from 'typeorm';
import { Stage2 } from './entities/stage2.entity';
import { CreateStage2Dto } from './dto/create-stage2.dto';
import { UpdateStage2Dto } from './dto/update-stage2.dto';
export declare class Stage2Service {
    private readonly engineRepository;
    private readonly stage2Repositiry;
    constructor(engineRepository: Repository<BrandEngine>, stage2Repositiry: Repository<Stage2>);
    create(createStage2Dto: CreateStage2Dto): Promise<string>;
    findByEngineId(id: number): Promise<Stage2[]>;
    findAllByPageination(page: number, limit: number): Promise<{
        count: number;
        data: Stage2[];
    }>;
    findAll(): Promise<Stage2[]>;
    findOne(id: number): Promise<Stage2[]>;
    update(id: number, updateStage1Dto: UpdateStage2Dto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
