import { WorkService } from './work.service';
import { CreateWorkDto } from './dto/create-work.dto';
export declare class WorkController {
    private readonly workService;
    constructor(workService: WorkService);
    create(files: any, createWorkDto: CreateWorkDto): Promise<{
        img: string;
        tag: import("../tag/entities/tag.entity").Tag;
        title: string;
        description: string;
        tagId: number;
    } & import("./entities/work.entity").Work>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: import("./entities/work.entity").Work[];
    }>;
    searchHandler(search: string): Promise<{
        count: number;
        data: import("./entities/work.entity").Work[];
    }>;
    findOne(id: number): Promise<import("./entities/work.entity").Work>;
    update(createWorkDto: CreateWorkDto, id: number, files: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<string>;
}
