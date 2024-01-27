import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from './entities/news.entity';
import { Repository } from 'typeorm';
import { FileService, FileType } from 'src/file/file.service';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News) private readonly newsRepository: Repository<News>,
    private fileService: FileService,
  ) {}
  async create(createNewsDto: CreateNewsDto, picture: any) {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    const news = await this.newsRepository.save({
      ...createNewsDto,
      img: picturePath,
    });
    return news;
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.newsRepository.find({});
    const news = await this.newsRepository.find({ take: limit, skip: skip });
    return {
      count: count.length,
      data: news,
    };
  }

  async findOne(id: number) {
    return await this.newsRepository.find({
      where: {
        id,
      },
    });
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return this.newsRepository.update(id, updateNewsDto);
  }

  async remove(id: number) {
    await this.newsRepository.delete(id);
    return 'deleted!';
  }
}
