import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';
import { Repository } from 'typeorm';
import { FileService } from 'src/file/file.service';
export declare class NewsService {
    private readonly newsRepository;
    private fileService;
    constructor(newsRepository: Repository<News>, fileService: FileService);
    create(createNewsDto: CreateNewsDto, picture: any): Promise<{
        img: string;
        title: string;
        description: string;
    } & News>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: News[];
    }>;
    findOne(id: number): Promise<News[]>;
    update(id: number, updateNewsDto: UpdateNewsDto, picture: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<string>;
}
