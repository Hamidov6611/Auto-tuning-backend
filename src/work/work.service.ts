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
    return await this.workRepository.find({ take: limit, skip: skip });
  }

  async findOne(id: number) {
    return await this.workRepository.find({
      where: {
        id,
      },
    });
  }

  update(id: number, updateWorkDto: UpdateWorkDto) {
    return this.workRepository.update(id, updateWorkDto);
  }

  async remove(id: number) {
    await this.workRepository.delete(id);
    return 'deleted!';
  }
}
