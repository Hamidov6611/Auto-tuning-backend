import { CreateAutoModelDto } from './dto/create-auto-model.dto';
import { UpdateAutoModelDto } from './dto/update-auto-model.dto';
import { AutoModel } from './entities/auto-model.entity';
import { Repository } from 'typeorm';
import { FileService } from 'src/file/file.service';
export declare class AutoModelService {
    private readonly autoModelRepository;
    private fileService;
    constructor(autoModelRepository: Repository<AutoModel>, fileService: FileService);
    create(createAutoModelDto: CreateAutoModelDto, picture: any): Promise<{
        img: string;
        title: string;
    } & AutoModel>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: AutoModel[];
    }>;
    getAllModel(): Promise<AutoModel[]>;
    findOne(id: number): Promise<AutoModel>;
    update(id: number, updateAutoModelDto: UpdateAutoModelDto, picture: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
