import { Repository } from 'typeorm';
import { FileService } from 'src/file/file.service';
import { Stock } from './entities/stock.entity';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
export declare class StockService {
    private readonly stockRepository;
    private fileService;
    constructor(stockRepository: Repository<Stock>, fileService: FileService);
    create(createStockDto: CreateStockDto, picture: any): Promise<{
        img: string;
        title: string;
        description: string;
    } & Stock>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: Stock[];
    }>;
    findOne(id: number): Promise<Stock[]>;
    update(id: number, updateStockDto: UpdateStockDto, picture: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<string>;
}
