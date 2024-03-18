import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { Repository } from 'typeorm';
import { FileService, FileType } from 'src/file/file.service';
import { Catalog } from 'src/catalog/entities/catalog.entity';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
    @InjectRepository(Catalog)
    private readonly catalogRepositiry: Repository<Catalog>,
    private fileService: FileService,
  ) {}
  async create(createBrandDto: CreateBrandDto, picture: string) {
    const catalog = await this.catalogRepositiry.findOne({
      where: { id: createBrandDto.catalog_id },
    });
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    await this.brandRepository.save({
      ...createBrandDto,
      img: picturePath,
      catalog,
    });
    return 'added successfully';
  }

  async sortById(id: number) {
    const models = await this.brandRepository.find({
      where: { id },
      relations: { brandModel: true },
    });

    return models;
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.brandRepository.find({});
    const catalogs = await this.brandRepository.find({
      take: limit,
      skip: skip,
      order: { createdat: 'DESC' },
      relations: { catalog: true },
    });
    return {
      count: count.length,
      data: catalogs,
    };
  }

  async sortByCategory(id: number) {
    const catalog = await this.catalogRepositiry.findOne({
      where: { id },
      relations: { brand: true },
    });
    console.log(catalog);

    return catalog?.brand;
  }

  async getAll(id: number) {
    const catalog = await this.catalogRepositiry.findOne({ where: { id } });
    const brand = await this.brandRepository.find({
      where: { catalog: catalog },
      order: { title: 'ASC' },
    });
    return brand;
  }

  async findOne(id: number) {
    return await this.brandRepository.findOne({
      where: { id },
      relations: { catalog: true },
    });
  }

  async update(id: number, updateBrandDto: UpdateBrandDto, picture: any) {
    const catalog = await this.catalogRepositiry.findOne({
      where: { id: updateBrandDto?.catalog_id },
    });

    if (picture) {
      const picturePath = this.fileService.updateFile(
        FileType.IMAGE,
        picture,
        updateBrandDto.img,
      );

      const brand = await this.brandRepository.update(
        { id },
        {
          title: updateBrandDto.title,
          img: picturePath,
          catalog,
        },
      );
      return brand;
    } else {
      const result = await this.brandRepository.update(id, {
        title: updateBrandDto.title,
        catalog,
      });
      return result;
    }
  }

  async remove(id: number) {
    const catalog = await this.brandRepository.findOne({
      where: { id },
    });
    this.fileService.removeFile(catalog.img);
    await this.brandRepository.delete(id);
    return 'deleted!';
  }
}
