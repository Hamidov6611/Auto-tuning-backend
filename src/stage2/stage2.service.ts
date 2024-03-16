import { Injectable } from '@nestjs/common';
import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Stage2 } from './entities/stage2.entity';
import { CreateStage2Dto } from './dto/create-stage2.dto';
import { UpdateStage2Dto } from './dto/update-stage2.dto';

@Injectable()
export class Stage2Service {
  constructor(
    @InjectRepository(BrandEngine)
    private readonly engineRepository: Repository<BrandEngine>,
    @InjectRepository(Stage2)
    private readonly stage2Repositiry: Repository<Stage2>,
  ) {}
  async create(createStage2Dto: CreateStage2Dto) {
    const engine = await this.engineRepository.findOne({
      where: { id: createStage2Dto.engine_id },
    });
    await this.stage2Repositiry.save({
      engine,
      original_nm: createStage2Dto.original_nm,
      after_nm: createStage2Dto.after_nm,
      original_hp: createStage2Dto.original_hp,
      after_hp: createStage2Dto.after_hp,
      price: createStage2Dto.price,
      description: createStage2Dto.description,
      exception: createStage2Dto.exception,
    });
    return 'added successfully';
  }

  async findAllByPageination(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.stage2Repositiry.find({});
    const stage1 = await this.stage2Repositiry.find({
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
    return await this.stage2Repositiry.find({ relations: { engine: true } });
  }

  async findOne(id: number) {
    return this.stage2Repositiry.find({
      where: { id },
      relations: { engine: true },
    });
  }

  async update(id: number, updateStage1Dto: UpdateStage2Dto) {
    return this.stage2Repositiry.update({ id }, updateStage1Dto);
  }

  async remove(id: number) {
    return await this.stage2Repositiry.delete(id);
  }
}
