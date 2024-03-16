import { Injectable } from '@nestjs/common';
import { CreateEcoDto } from './dto/create-eco.dto';
import { UpdateEcoDto } from './dto/update-eco.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { Repository } from 'typeorm';
import { Eco } from './entities/eco.entity';

@Injectable()
export class EcoService {
  constructor(
    @InjectRepository(BrandEngine)
    private readonly engineRepository: Repository<BrandEngine>,
    @InjectRepository(Eco)
    private readonly ecoRepositiry: Repository<Eco>,
  ) {}

  async create(CreateEcoDto: CreateEcoDto) {
    const engine = await this.engineRepository.findOne({
      where: { id: CreateEcoDto.engine_id },
    });
    await this.ecoRepositiry.save({
      engine,
      after_nm: CreateEcoDto.after_nm,
      original_nm: CreateEcoDto.original_nm,
      percentage: CreateEcoDto.percentage,
      description: CreateEcoDto.description,
      price: CreateEcoDto.price,
    });
    return 'added successfully';
  }

  // wrong name Pagination 😂
  async findAllByPageination(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.ecoRepositiry.find({});
    const ecos = await this.ecoRepositiry.find({
      take: limit,
      skip: skip,
      order: { createdat: 'ASC' },
    });
    return {
      count: count.length,
      data: ecos,
    };
  }

  async findAll() {
    return await this.ecoRepositiry.find({ relations: { engine: true } });
  }

  async findOne(id: number) {
    return await this.ecoRepositiry.findOne({ where: { id } });
  }

  async update(id: number, updateEcoDto: UpdateEcoDto) {
    return await this.ecoRepositiry.update({ id }, updateEcoDto);
  }

  async remove(id: number) {
    return await this.ecoRepositiry.delete(id);
  }
}
