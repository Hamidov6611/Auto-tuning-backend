import { Injectable } from '@nestjs/common';
import { CreateAutoModelDto } from './dto/create-auto-model.dto';
import { UpdateAutoModelDto } from './dto/update-auto-model.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AutoModel } from './entities/auto-model.entity';
import { Repository } from 'typeorm';
import { FileService, FileType } from 'src/file/file.service';

@Injectable()
export class AutoModelService {
  constructor(
    @InjectRepository(AutoModel)
    private readonly autoModelRepository: Repository<AutoModel>,
    private fileService: FileService,
  ) {}

  async create(createAutoModelDto: CreateAutoModelDto, picture: any) {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    const model = await this.autoModelRepository.save({
      ...createAutoModelDto,
      img: picturePath,
    });
    return model;
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.autoModelRepository.find({});
    const model = await this.autoModelRepository.find({
      take: limit,
      skip: skip,
      order: { createdat: 'DESC' },
    });

    return {
      count: count.length,
      data: model,
    };
  }

  async getAllModel() {
    return await this.autoModelRepository.find({});
  }

  async findOne(id: number) {
    return await this.autoModelRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateAutoModelDto: UpdateAutoModelDto,
    picture: any,
  ) {
    if (picture) {
      const picturePath = this.fileService.updateFile(
        FileType.IMAGE,
        picture,
        updateAutoModelDto.img,
      );
      const autoModel = await this.autoModelRepository.update(
        { id },
        { ...updateAutoModelDto, img: picturePath },
      );
      return autoModel;
    } else {
      const autoModel = await this.autoModelRepository.update(
        { id },
        updateAutoModelDto,
      );
    }
  }

  async remove(id: number) {
    const model = await this.autoModelRepository.findOne({ where: { id } });
    this.fileService.removeFile(model.img);
    return await this.autoModelRepository.delete(id);
  }
}
