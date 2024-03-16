import { Injectable } from '@nestjs/common';
import { CreateBrandModelDto } from './dto/create-brand-model.dto';
import { UpdateBrandModelDto } from './dto/update-brand-model.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from 'src/brand/entities/brand.entity';
import { Repository } from 'typeorm';
import { BrandModel } from './entities/brand-model.entity';

@Injectable()
export class BrandModelService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
    @InjectRepository(BrandModel)
    private readonly modelRepositiry: Repository<BrandModel>,
  ) {}
  async create(createBrandModelDto: CreateBrandModelDto) {
    const brand = await this.brandRepository.findOne({
      where: { id: createBrandModelDto.brand_id },
    });
    console.log(brand);
    await this.modelRepositiry.save({
      title: createBrandModelDto.title,
      brand,
    });
    return 'added successfully';
  }

  async findAll() {
    return await this.modelRepositiry.find({ relations: { brand: true } });
  }

   // wrong name Pagination 😂
   async findAllByPageination(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.modelRepositiry.find({});
    const models = await this.modelRepositiry.find({
      take: limit,
      skip: skip,
      order: { createdat: 'ASC' },
    });
    return {
      count: count.length,
      data: models,
    };
  }

  async findOne(id: number) {
    return await this.modelRepositiry.findOne({ where: { id } });
  }

  update(id: number, updateBrandModelDto: UpdateBrandModelDto) {
    return `This action updates a #${id} brandModel`;
  }

  async remove(id: number) {
    return await this.modelRepositiry.delete(id);
  }
}
