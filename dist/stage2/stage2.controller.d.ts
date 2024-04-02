import { Stage2Service } from './stage2.service';
import { CreateStage2Dto } from './dto/create-stage2.dto';
import { UpdateStage2Dto } from './dto/update-stage2.dto';
export declare class Stage2Controller {
    private readonly stage2Service;
    constructor(stage2Service: Stage2Service);
    create(createStage2Dto: CreateStage2Dto): Promise<string>;
    findByEngine(id: number): Promise<import("./entities/stage2.entity").Stage2[]>;
    findAllByPageination(page: number, limit: number): Promise<{
        count: number;
        data: import("./entities/stage2.entity").Stage2[];
    }>;
    findAll(): Promise<import("./entities/stage2.entity").Stage2[]>;
    findOne(id: string): Promise<import("./entities/stage2.entity").Stage2[]>;
    update(id: string, updateStage2Dto: UpdateStage2Dto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
