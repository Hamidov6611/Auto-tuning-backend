import { Stage1Service } from './stage1.service';
import { CreateStage1Dto } from './dto/create-stage1.dto';
import { UpdateStage1Dto } from './dto/update-stage1.dto';
export declare class Stage1Controller {
    private readonly stage1Service;
    constructor(stage1Service: Stage1Service);
    create(createStage1Dto: CreateStage1Dto): Promise<string>;
    findAllByPageination(page: number, limit: number): Promise<{
        count: number;
        data: import("./entities/stage1.entity").Stage1[];
    }>;
    findByEngine(id: number): Promise<import("./entities/stage1.entity").Stage1[]>;
    findAll(): Promise<import("./entities/stage1.entity").Stage1[]>;
    findOne(id: string): Promise<import("./entities/stage1.entity").Stage1[]>;
    update(id: string, updateStage1Dto: UpdateStage1Dto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
