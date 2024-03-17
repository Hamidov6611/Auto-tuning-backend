import { CreateRcPlusDto } from './dto/create-rc-plus.dto';
import { UpdateRcPlusDto } from './dto/update-rc-plus.dto';
import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { Repository } from 'typeorm';
import { RcPlus } from './entities/rc-plus.entity';
export declare class RcPlusService {
    private readonly engineRepository;
    private readonly rcRepositiry;
    constructor(engineRepository: Repository<BrandEngine>, rcRepositiry: Repository<RcPlus>);
    create(createRcPlusDto: CreateRcPlusDto): Promise<string>;
    findAllByPageination(page: number, limit: number): Promise<{
        count: number;
        data: RcPlus[];
    }>;
    findAll(): Promise<RcPlus[]>;
    findOne(id: number): Promise<RcPlus>;
    update(id: number, updateRcPlusDto: UpdateRcPlusDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
