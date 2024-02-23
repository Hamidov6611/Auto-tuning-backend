import { CatalogService } from './catalog.service';
import { CreateCatalogDto } from './dto/create-catalog.dto';
export declare class CatalogController {
    private readonly catalogService;
    constructor(catalogService: CatalogService);
    create(files: any, createCatalogDto: CreateCatalogDto): Promise<{
        img: string;
        title: string;
    } & import("./entities/catalog.entity").Catalog>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: import("./entities/catalog.entity").Catalog[];
    }>;
    findOne(id: string): Promise<import("./entities/catalog.entity").Catalog>;
    update(createCatlogDto: CreateCatalogDto, id: number, files: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
