import { Injectable } from '@nestjs/common';
import { CreateTransmissionDto } from './dto/create-transmission.dto';
import { UpdateTransmissionDto } from './dto/update-transmission.dto';
import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { Repository } from 'typeorm';
import { Transmission } from './entities/transmission.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TransmissionService {
  constructor(
    @InjectRepository(BrandEngine)
    private readonly engineRepository: Repository<BrandEngine>,
    @InjectRepository(Transmission)
    private readonly transmissionRepositiry: Repository<Transmission>,
  ) {}

  async create(createTransmissionDto: CreateTransmissionDto) {
    const engine = await this.engineRepository.findOne({
      where: { id: createTransmissionDto.engine_id },
    });
    await this.transmissionRepositiry.save({
      description: createTransmissionDto.description,
      list: createTransmissionDto.list,
      price: createTransmissionDto.price,
      engine,
    });
    return 'added successfully';
  }

  async findByEngineId(id: number): Promise<Transmission[]> {
    const engine = await this.engineRepository.findOne({
      where: { id },
      relations: ['transmission'],
    });
    if (!engine) {
      throw new Error('Engine not found');
    }
    return engine.transmission;
  }

  async findAllByPageination(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.transmissionRepositiry.find({});
    const transmission = await this.transmissionRepositiry.find({
      take: limit,
      skip: skip,
      order: { createdat: 'ASC' },
      relations: { engine: true },
    });
    return {
      count: count.length,
      data: transmission,
    };
  }

  async findAll() {
    return await this.transmissionRepositiry.find({
      relations: { engine: true },
    });
  }

  async findOne(id: number) {
    return await this.transmissionRepositiry.findOne({ where: { id } });
  }

  async update(id: number, updateTransmissionDto: UpdateTransmissionDto) {
    return await this.transmissionRepositiry.update(
      { id },
      updateTransmissionDto,
    );
  }

  async remove(id: number) {
    return await this.transmissionRepositiry.delete(id);
  }
}
