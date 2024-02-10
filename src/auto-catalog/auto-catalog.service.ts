import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAutoCatalogDto } from './dto/create-auto-catalog.dto';
import { UpdateAutoCatalogDto } from './dto/update-auto-catalog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AutoCatalog } from './entities/auto-catalog.entity';
import { Repository } from 'typeorm';
import { FileService, FileType } from 'src/file/file.service';
import { AutoModel } from 'src/auto-model/entities/auto-model.entity';

@Injectable()
export class AutoCatalogService {
  constructor(
    @InjectRepository(AutoCatalog)
    private readonly catalogRepository: Repository<AutoCatalog>,
    @InjectRepository(AutoModel)
    private readonly autoModelRepository: Repository<AutoModel>,
    private fileService: FileService,
  ) {}
  async create(
    createAutoCatalogDto: CreateAutoCatalogDto,
    picture: any,
    video: any,
  ) {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    const videoPath = this.fileService.createFile(FileType.VIDEO, video);
    const catalog = await this.catalogRepository.save({
      ...createAutoCatalogDto,
      img: picturePath,
      video: videoPath,
    });

    return catalog;
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.catalogRepository.find({});
    const catalog = await this.catalogRepository.find({
      take: limit,
      skip: skip,
      order: { createdat: 'DESC' },
      relations: { model: true },
    });

    return {
      count: count.length,
      data: catalog,
    };
  }

  async getCatalogByModel(modelId: string) {
    const catalog = await this.catalogRepository.find({
      relations: { model: true },
    });

    let a = catalog?.map((c) => {
      if (c?.model?.id == parseInt(modelId)) {
        return c;
      } else {
        throw new BadRequestException('This catalogs not found');
      }
    });
    return a;
  }

  async findOne(id: number) {
    return await this.catalogRepository.findOne({
      where: { id },
      relations: { model: true },
    });
  }

  async update(
    id: number,
    updateAutoCatalogDto: UpdateAutoCatalogDto,
    picture: any,
    video: any,
  ) {
    try {
      const model = await this.autoModelRepository.findOne({
        where: { id: updateAutoCatalogDto.modelId },
      });

      if (picture || video) {
        if (picture) {
          const picturePath = this.fileService.updateFile(
            FileType.IMAGE,
            picture,
            updateAutoCatalogDto.img,
          );
          await this.catalogRepository.update(
            { id },
            {
              title: updateAutoCatalogDto.title,
              price: updateAutoCatalogDto.price,
              model,
              img: picturePath,
            },
          );
        }
        if (video) {
          const videoPath = this.fileService.updateFile(
            FileType.VIDEO,
            video,
            updateAutoCatalogDto.video,
          );
          await this.catalogRepository.update(
            { id },
            {
              title: updateAutoCatalogDto.title,
              price: updateAutoCatalogDto.price,
              model,
              video: videoPath,
            },
          );
        }
      } else {
        const result = await this.catalogRepository.update(
          { id },
          {
            title: updateAutoCatalogDto.title,
            price: updateAutoCatalogDto.price,
            model,
          },
        );
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    const catalog = await this.catalogRepository.findOne({ where: { id } });
    this.fileService.removeFile(catalog.img);
    this.fileService.removeFile(catalog.video);
    return await this.catalogRepository.delete(id);
  }
}
