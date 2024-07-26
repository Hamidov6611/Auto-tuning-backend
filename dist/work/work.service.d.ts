import { CreateWorkDto } from './dto/create-work.dto';
import { Work } from './entities/work.entity';
import { Repository } from 'typeorm';
import { FileService } from 'src/file/file.service';
import { Tag } from 'src/tag/entities/tag.entity';
export declare class WorkService {
    private readonly workRepository;
    private readonly tagRepository;
    private fileService;
    constructor(workRepository: Repository<Work>, tagRepository: Repository<Tag>, fileService: FileService);
    create(createWorkDto: CreateWorkDto, picture: any): Promise<{
        img: string;
        tag: Tag;
        title: string;
        description: string;
        tagId: number;
    } & Work>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: Work[];
    }>;
    findOne(id: number): Promise<Work>;
    update(id: number, updateWorkDto: CreateWorkDto, picture: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<string>;
    searchWorks(query: string): Promise<{
        count: number;
        data: Work[];
    }>;
}
