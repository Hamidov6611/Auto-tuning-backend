import { Injectable } from '@nestjs/common';
import { CreateRcPlusDto } from './dto/create-rc-plus.dto';
import { UpdateRcPlusDto } from './dto/update-rc-plus.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { Repository } from 'typeorm';
import { RcPlus } from './entities/rc-plus.entity';

@Injectable()
export class RcPlusService {
  constructor(
    @InjectRepository(BrandEngine)
    private readonly engineRepository: Repository<BrandEngine>,
    @InjectRepository(RcPlus)
    private readonly rcRepositiry: Repository<RcPlus>,
  ) {}

  async create(createRcPlusDto: CreateRcPlusDto) {
    const engine = await this.engineRepository.findOne({
      where: { id: createRcPlusDto.engine_id },
    });
    await this.rcRepositiry.save({
      engine,
      title: createRcPlusDto.title,
      description: createRcPlusDto.description,
      hero: createRcPlusDto.hero,
    });
    return 'added successfully';
  }

  async findAllByPageination(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.rcRepositiry.find({});
    const rc = await this.rcRepositiry.find({
      take: limit,
      skip: skip,
      order: { createdat: 'ASC' },
    });
    return {
      count: count.length,
      data: rc,
    };
  }

  async findAll() {
    return await this.rcRepositiry.find({ relations: { engine: true } });
  }

  async findOne(id: number) {
    return await this.rcRepositiry.findOne({
      where: { id },
      relations: { engine: true },
    });
  }

  async update(id: number, updateRcPlusDto: UpdateRcPlusDto) {
    return await this.rcRepositiry.update({ id }, updateRcPlusDto);
  }

  async remove(id: number) {
    return await this.rcRepositiry.delete(id);
  }
}
