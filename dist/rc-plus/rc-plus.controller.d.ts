import { RcPlusService } from './rc-plus.service';
import { CreateRcPlusDto } from './dto/create-rc-plus.dto';
import { UpdateRcPlusDto } from './dto/update-rc-plus.dto';
export declare class RcPlusController {
    private readonly rcPlusService;
    constructor(rcPlusService: RcPlusService);
    create(createRcPlusDto: CreateRcPlusDto): Promise<string>;
    findAllByPageination(page: number, limit: number): Promise<{
        count: number;
        data: import("./entities/rc-plus.entity").RcPlus[];
    }>;
    findAll(): Promise<import("./entities/rc-plus.entity").RcPlus[]>;
    findOne(id: string): Promise<import("./entities/rc-plus.entity").RcPlus>;
    update(id: string, updateRcPlusDto: UpdateRcPlusDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
