import { Injectable } from '@nestjs/common';
import { CreateBrandYearDto } from './dto/create-brand-year.dto';
import { UpdateBrandYearDto } from './dto/update-brand-year.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandModel } from 'src/brand-model/entities/brand-model.entity';
import { Repository } from 'typeorm';
import { BrandYear } from './entities/brand-year.entity';

@Injectable()
export class BrandYearService {
  constructor(
    @InjectRepository(BrandYear)
    private readonly yearRepository: Repository<BrandYear>,
    @InjectRepository(BrandModel)
    private readonly modelRepositiry: Repository<BrandModel>,
  ) {}

  async create(createBrandYearDto: CreateBrandYearDto) {
    const model = await this.modelRepositiry.findOne({
      where: { id: createBrandYearDto.model_id },
    });
    console.log(model);
    await this.yearRepository.save({
      title: createBrandYearDto.title,
      model,
    });
    return 'added successfully';
  }

  // wrong name Pagination 😂
  async findAllByPageination(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.yearRepository.find({});
    const years = await this.yearRepository.find({
      take: limit,
      skip: skip,
      order: { createdat: 'ASC' },
    });
    return {
      count: count.length,
      data: years,
    };
  }

  async findAll() {
    return await this.yearRepository.find({});
  }

  async findOne(id: number) {
    return this.yearRepository.findOne({ where: { id } });
  }

  update(id: number, updateBrandYearDto: UpdateBrandYearDto) {
    return `This action updates a #${id} brandYear`;
  }

  async remove(id: number) {
    return await this.yearRepository.delete(id);
  }
}
