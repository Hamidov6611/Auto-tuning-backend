import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
export declare class StockController {
    private readonly stockService;
    constructor(stockService: StockService);
    create(files: any, createStockDto: CreateStockDto): Promise<{
        img: string;
        title: string;
        description: string;
    } & import("./entities/stock.entity").Stock>;
    update(createStockDto: CreateStockDto, id: number, files: any): Promise<import("typeorm").UpdateResult>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: import("./entities/stock.entity").Stock[];
    }>;
    findOne(id: string): Promise<import("./entities/stock.entity").Stock[]>;
    remove(id: string): Promise<string>;
}
