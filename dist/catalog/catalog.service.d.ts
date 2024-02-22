import { CreateCatalogDto } from './dto/create-catalog.dto';
import { UpdateCatalogDto } from './dto/update-catalog.dto';
import { Catalog } from './entities/catalog.entity';
import { Repository } from 'typeorm';
import { FileService } from 'src/file/file.service';
export declare class CatalogService {
    private readonly catalogRepository;
    private fileService;
    constructor(catalogRepository: Repository<Catalog>, fileService: FileService);
    create(createCatalogDto: CreateCatalogDto, picture: any): Promise<{
        img: string;
        title: string;
    } & Catalog>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: Catalog[];
    }>;
    findOne(id: number): Promise<Catalog>;
    update(id: number, updateCatalogDto: UpdateCatalogDto, picture: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
