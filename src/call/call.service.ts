import { Injectable } from '@nestjs/common';
import { CreateCallDto } from './dto/create-call.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Call } from './entities/call.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CallService {
  constructor(
    @InjectRepository(Call) private readonly callRepository: Repository<Call>,
  ) {}

  async create(createCallDto: CreateCallDto) {
    return await this.callRepository.save(createCallDto);
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.callRepository.find({});
    const call = await this.callRepository.find({
      take: limit,
      skip: skip,
      order: {
        createdAt: 'ASC',
      },
    });
    return {
      count: count.length,
      data: call,
    };
  }

  async remove(id: number) {
    return await this.callRepository.delete(id);
  }
}
