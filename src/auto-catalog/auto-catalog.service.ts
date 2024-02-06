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
  async create(createAutoCatalogDto: CreateAutoCatalogDto, picture: any, video: any) {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    const videoPath = this.fileService.createFile(FileType.VIDEO, video)
    const catalog = await this.catalogRepository.save({
      ...createAutoCatalogDto,
      img: picturePath,
      video: videoPath
    });

    return catalog;
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.catalogRepository.find({});
    const catalog = await this.catalogRepository.find({
      take: limit,
      skip: skip,
      order: { createdAt: 'DESC' }, relations: {model: true}
    });

    return {
      count: count.length,
      data: catalog,
    };
  }

  async getCatalogByModel(modelId: string) {
    const catalog = await this.catalogRepository.find({relations: {model: true}})

    let a = catalog?.map(c => {
      if(c?.model?.id == parseInt(modelId)) {
        return c
      }else {
        throw new BadRequestException("This catalogs not found")
      }
    })
    return a
  }

  findOne(id: number) {
    return `This action returns a #${id} autoCatalog`;
  }

  update(id: number, updateAutoCatalogDto: UpdateAutoCatalogDto) {
    return `This action updates a #${id} autoCatalog`;
  }

  async remove(id: number) {
    return await this.catalogRepository.delete(id)
  }
}
