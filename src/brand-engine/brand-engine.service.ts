import { Injectable } from '@nestjs/common';
import { CreateBrandEngineDto } from './dto/create-brand-engine.dto';
import { UpdateBrandEngineDto } from './dto/update-brand-engine.dto';
import { BrandEngine } from './entities/brand-engine.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandYear } from 'src/brand-year/entities/brand-year.entity';

@Injectable()
export class BrandEngineService {
  constructor(
    @InjectRepository(BrandEngine)
    private readonly engineRepository: Repository<BrandEngine>,
    @InjectRepository(BrandYear)
    private readonly yearRepositiry: Repository<BrandYear>,
  ) {}
  async create(createBrandEngineDto: CreateBrandEngineDto) {
    const year = await this.yearRepositiry.findOne({
      where: { id: createBrandEngineDto.year_id },
    });
    await this.engineRepository.save({
      name: createBrandEngineDto.name,
      engine_hp: createBrandEngineDto.engine_hp,
      type_engine: createBrandEngineDto.type_engine,
      year,
    });
    return 'added successfully';
  }

  async findAllByPageination(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.engineRepository.find({});
    const catalogs = await this.engineRepository.find({
      take: limit,
      skip: skip,
      order: { createdat: 'ASC' },
      relations: { year: true },
    });
    return {
      count: count.length,
      data: catalogs,
    };
  }

  async findAll() {
    return await this.engineRepository.find({ relations: { year: true } });
  }

  async findOne(id: number) {
    return await this.engineRepository.findOne({ where: { id } });
  }

  async update(id: number, updateBrandEngineDto: UpdateBrandEngineDto) {
    const engine = await this.engineRepository.findOne({ where: { id } });
    if (updateBrandEngineDto.name) {
      await this.engineRepository.update(
        { id },
        { ...engine, name: updateBrandEngineDto.name },
      );
    }
    return `Updated`;
  }

  async remove(id: number) {
    return await this.engineRepository.delete(id);
  }
}
