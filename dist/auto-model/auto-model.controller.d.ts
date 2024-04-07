import { AutoModelService } from './auto-model.service';
import { CreateAutoModelDto } from './dto/create-auto-model.dto';
import { UpdateAutoModelDto } from './dto/update-auto-model.dto';
export declare class AutoModelController {
    private readonly autoModelService;
    constructor(autoModelService: AutoModelService);
    create(files: any, createAutoModelDto: CreateAutoModelDto): Promise<{
        img: string;
        title: string;
    } & import("./entities/auto-model.entity").AutoModel>;
    getAllModel(): Promise<import("./entities/auto-model.entity").AutoModel[]>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: import("./entities/auto-model.entity").AutoModel[];
    }>;
    findOne(id: string): Promise<import("./entities/auto-model.entity").AutoModel>;
    update(id: string, updateAutoModelDto: UpdateAutoModelDto, files: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
