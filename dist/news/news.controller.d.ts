import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    create(files: any, createNewsDto: CreateNewsDto): Promise<{
        img: string;
        title: string;
        description: string;
    } & import("./entities/news.entity").News>;
    update(createNewsDto: CreateNewsDto, id: number, files: any): Promise<import("typeorm").UpdateResult>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: import("./entities/news.entity").News[];
    }>;
    findOne(id: string): Promise<import("./entities/news.entity").News[]>;
    remove(id: string): Promise<string>;
}
