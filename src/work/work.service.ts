import { Injectable } from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Work } from './entities/work.entity';
import { Repository } from 'typeorm';
import { FileService, FileType } from 'src/file/file.service';

@Injectable()
export class WorkService {
  constructor(
    @InjectRepository(Work) private readonly workRepository: Repository<Work>,
    private fileService: FileService,
  ) {}
  async create(createWorkDto: CreateWorkDto, picture: any) {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    const news = await this.workRepository.save({
      ...createWorkDto,
      img: picturePath,
    });
    return news;
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.workRepository.find({});
    const work = await this.workRepository.find({
      take: limit,
      skip: skip,
      order: { createdAt: 'DESC' },
    });
    return {
      count: count.length,
      data: work,
    };
  }

  async findOne(id: number) {
    const numericId = parseInt(id as any, 10);
    if (isNaN(numericId)) {
      throw new Error('Invalid ID format');
    }

    return await this.workRepository.findOne({
      where: {
        id: numericId,
      },
    });
  }

  async update(id: number, updateWorkDto: UpdateWorkDto) {
    return await this.workRepository.update(id, updateWorkDto);
  }

  async remove(id: number) {
    await this.workRepository.delete(id);
    return 'deleted!';
  }
  async searchWorks(query: string) {
    const works = await this.workRepository
      .createQueryBuilder('work')
      .where('LOWER(work.title) LIKE LOWER(:query)', { query: `%${query}%` })
      .orWhere('LOWER(work.desc) LIKE LOWER(:query)', { query: `%${query}%` })
      .getMany();

    return {
      count: works.length,
      data: works,
    };
  }
}
