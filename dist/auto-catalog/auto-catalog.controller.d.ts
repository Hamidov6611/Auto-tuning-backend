import { AutoCatalogService } from './auto-catalog.service';
import { CreateAutoCatalogDto } from './dto/create-auto-catalog.dto';
import { UpdateAutoCatalogDto } from './dto/update-auto-catalog.dto';
export declare class AutoCatalogController {
    private readonly autoCatalogService;
    constructor(autoCatalogService: AutoCatalogService);
    create(files: any, createCatalogDto: CreateAutoCatalogDto): Promise<{
        img: string;
        video: string;
        title: string;
        model: import("../auto-model/entities/auto-model.entity").AutoModel;
        price: number;
    } & import("./entities/auto-catalog.entity").AutoCatalog>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: import("./entities/auto-catalog.entity").AutoCatalog[];
    }>;
    getByModel(id: string): Promise<import("./entities/auto-catalog.entity").AutoCatalog[]>;
    findOne(id: string): Promise<import("./entities/auto-catalog.entity").AutoCatalog>;
    update(files: any, id: number, updateAutoCatalogDto: UpdateAutoCatalogDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
