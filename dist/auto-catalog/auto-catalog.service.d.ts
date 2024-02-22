import { CreateAutoCatalogDto } from './dto/create-auto-catalog.dto';
import { UpdateAutoCatalogDto } from './dto/update-auto-catalog.dto';
import { AutoCatalog } from './entities/auto-catalog.entity';
import { Repository } from 'typeorm';
import { FileService } from 'src/file/file.service';
import { AutoModel } from 'src/auto-model/entities/auto-model.entity';
export declare class AutoCatalogService {
    private readonly catalogRepository;
    private readonly autoModelRepository;
    private fileService;
    constructor(catalogRepository: Repository<AutoCatalog>, autoModelRepository: Repository<AutoModel>, fileService: FileService);
    create(createAutoCatalogDto: CreateAutoCatalogDto, picture: any, video: any): Promise<{
        img: string;
        video: string;
        title: string;
        model: AutoModel;
        price: number;
    } & AutoCatalog>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: AutoCatalog[];
    }>;
    getCatalogByModel(modelId: string): Promise<AutoCatalog[]>;
    findOne(id: number): Promise<AutoCatalog>;
    update(id: number, updateAutoCatalogDto: UpdateAutoCatalogDto, picture: any, video: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
