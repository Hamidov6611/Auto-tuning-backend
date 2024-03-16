import { Injectable } from '@nestjs/common';
import { CreateTransmissionDto } from './dto/create-transmission.dto';
import { UpdateTransmissionDto } from './dto/update-transmission.dto';

@Injectable()
export class TransmissionService {
  create(createTransmissionDto: CreateTransmissionDto) {
    return 'This action adds a new transmission';
  }

  findAll() {
    return `This action returns all transmission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transmission`;
  }

  update(id: number, updateTransmissionDto: UpdateTransmissionDto) {
    return `This action updates a #${id} transmission`;
  }

  remove(id: number) {
    return `This action removes a #${id} transmission`;
  }
}
