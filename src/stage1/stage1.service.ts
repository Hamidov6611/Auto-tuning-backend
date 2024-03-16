import { Injectable } from '@nestjs/common';
import { CreateStage1Dto } from './dto/create-stage1.dto';
import { UpdateStage1Dto } from './dto/update-stage1.dto';
import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { Repository } from 'typeorm';
import { Stage1 } from './entities/stage1.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class Stage1Service {
  constructor(
    @InjectRepository(BrandEngine)
    private readonly engineRepository: Repository<BrandEngine>,
    @InjectRepository(Stage1)
    private readonly stage1Repositiry: Repository<Stage1>,
  ) {}
  async create(createStage1Dto: CreateStage1Dto) {
    const engine = await this.engineRepository.findOne({
      where: { id: createStage1Dto.engine_id },
    });
    await this.stage1Repositiry.save({
      engine,
      original_nm: createStage1Dto.original_nm,
      after_nm: createStage1Dto.after_nm,
      original_hp: createStage1Dto.original_hp,
      after_hp: createStage1Dto.after_hp,
      price: createStage1Dto.price,
      description: createStage1Dto.description,
      exception: createStage1Dto.exception,
    });
    return 'added successfully';
  }

  async findAllByPageination(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.stage1Repositiry.find({});
    const stage1 = await this.stage1Repositiry.find({
      take: limit,
      skip: skip,
      order: { createdat: 'ASC' },
    });
    return {
      count: count.length,
      data: stage1,
    };
  }

  async findAll() {
    return await this.stage1Repositiry.find({ relations: { engine: true } });
  }

  async findOne(id: number) {
    return this.stage1Repositiry.find({
      where: { id },
      relations: { engine: true },
    });
  }

  async update(id: number, updateStage1Dto: UpdateStage1Dto) {
    return this.stage1Repositiry.update({ id }, updateStage1Dto);
  }

  async remove(id: number) {
    return await this.stage1Repositiry.delete(id);
  }
}
