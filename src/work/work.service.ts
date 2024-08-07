import { Injectable } from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Work } from './entities/work.entity';
import { Repository } from 'typeorm';
import { FileService, FileType } from 'src/file/file.service';
import { Tag } from 'src/tag/entities/tag.entity';

@Injectable()
export class WorkService {
  constructor(
    @InjectRepository(Work) private readonly workRepository: Repository<Work>,
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
    private fileService: FileService,
  ) {}
  async create(createWorkDto: CreateWorkDto, picture: any) {
    const tag = await this.tagRepository.findOne({
      where: {
        id: createWorkDto.tagId,
      },
    })
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    const news = await this.workRepository.save({
      ...createWorkDto,
      img: picturePath,
      tag
    });
    return news;
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.workRepository.find({});
    const work = await this.workRepository.find({
      take: limit,
      skip: skip,
      relations: { tag: true },
      order: { createdAt: 'DESC' },
    });
    return {
      count: count.length,
      data: work,
    };
  }

  async findOne(id: number) {
    return await this.workRepository.findOne({
      where: {
        id,
      },
      relations: { tag: true },
    });
  }

  async update(id: number, updateWorkDto: CreateWorkDto, picture: any) {
    if (picture) {
      const picturePath = this.fileService.updateFile(
        FileType.IMAGE,
        picture,
        updateWorkDto.img,
      );
      const news = await this.workRepository.update(
        { id },
        { ...updateWorkDto, img: picturePath },
      );
      return news;
    } else {
      const result = await this.workRepository.update({ id }, updateWorkDto);
      return result;
    }
  }

  async remove(id: number) {
    await this.workRepository.delete(id);
    return 'deleted!';
  }
  async searchWorks(query: string) {
    const works = await this.workRepository
      .createQueryBuilder('work')
      .where('LOWER(work.title) LIKE LOWER(:query)', { query: `%${query}%` })
      .orWhere('LOWER(work.description) LIKE LOWER(:query)', {
        query: `%${query}%`,
      })
      .getMany();

    return {
      count: works.length,
      data: works,
    };
  }
}
