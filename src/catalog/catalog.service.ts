import { Injectable } from '@nestjs/common';
import { CreateCatalogDto } from './dto/create-catalog.dto';
import { UpdateCatalogDto } from './dto/update-catalog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Catalog } from './entities/catalog.entity';
import { Repository } from 'typeorm';
import { FileService, FileType } from 'src/file/file.service';

@Injectable()
export class CatalogService {
  constructor(
    @InjectRepository(Catalog)
    private readonly catalogRepository: Repository<Catalog>,
    private fileService: FileService,
  ) {}

  async create(createCatalogDto: CreateCatalogDto, picture: any) {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    const catalog = await this.catalogRepository.save({
      ...createCatalogDto,
      img: picturePath,
    });
    return catalog;
  }

  async getByBrand(id: number) {
    return await this.catalogRepository.findOne({where: {id}, relations: {brand: true}})
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.catalogRepository.find({});
    const catalogs = await this.catalogRepository.find({
      take: limit,
      skip: skip,
      order: { createdat: 'ASC' },
    });
    return {
      count: count.length,
      data: catalogs,
    };
  }

  async findOne(id: number) {
    return await this.catalogRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCatalogDto: UpdateCatalogDto, picture: any) {
    if (picture) {
      const picturePath = this.fileService.updateFile(
        FileType.IMAGE,
        picture,
        updateCatalogDto.img,
      );
      const catalogs = await this.catalogRepository.update(
        { id },
        { ...updateCatalogDto, img: picturePath },
      );
      return catalogs;
    } else {
      const result = await this.catalogRepository.update(
        { id },
        updateCatalogDto,
      );
      return result;
    }
  }

  async remove(id: number) {
    const catalog = await this.catalogRepository.findOne({
      where: { id },
    });
    this.fileService.removeFile(catalog.img);
    return await this.catalogRepository.delete(id);
  }
}
