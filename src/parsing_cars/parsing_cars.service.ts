import { Injectable } from '@nestjs/common';
import { CreateParsingCarDto } from './dto/create-parsing_car.dto';
import { UpdateParsingCarDto } from './dto/update-parsing_car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ParsingCar } from './entities/parsing_car.entity';
import { Repository } from 'typeorm';
import { Brand } from 'src/brand/entities/brand.entity';

@Injectable()
export class ParsingCarsService {
  constructor(
    @InjectRepository(ParsingCar)
    private readonly parsingCarRepository: Repository<ParsingCar>,
  ) {}

  create(createParsingCarDto: CreateParsingCarDto) {
    return 'This action adds a new parsingCar';
  }

  async findAll() {
    return await this.parsingCarRepository.find({
      relations: { parsing_make_id: true },
    });
  }

  async findOne(id: number) {
    return await this.parsingCarRepository.findOne({
      where: {
        id,
      },
      relations: { parsing_make_id: true },
    });
  }

  update(id: number, updateParsingCarDto: UpdateParsingCarDto) {
    return `This action updates a #${id} parsingCar`;
  }

  remove(id: number) {
    return `This action removes a #${id} parsingCar`;
  }
}
