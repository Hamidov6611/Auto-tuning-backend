import { Injectable } from '@nestjs/common';
import { CreateParsingCarMakeDto } from './dto/create-parsing_car_make.dto';
import { UpdateParsingCarMakeDto } from './dto/update-parsing_car_make.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ParsingCar } from 'src/parsing_cars/entities/parsing_car.entity';
import { Repository } from 'typeorm';
import { ParsingCarMake } from './entities/parsing_car_make.entity';

@Injectable()
export class ParsingCarMakesService {
  constructor(
    @InjectRepository(ParsingCar)
    private readonly parsingCarRepository: Repository<ParsingCar>,
    @InjectRepository(ParsingCarMake)
    private readonly parsingCarMakeRepository: Repository<ParsingCarMake>,
  ) {}

  create(createParsingCarMakeDto: CreateParsingCarMakeDto) {
    return 'This action adds a new parsingCarMake';
  }

  async findAll() {
    return await this.parsingCarMakeRepository.find({
      relations: { parent_id: true },
    });
  }

  

  async findOne(id: number) {
    return await this.parsingCarMakeRepository.findOne({
      where: { id },
      relations: {parsing_car_makes_years_id: true}
    });
  }

  update(id: number, updateParsingCarMakeDto: UpdateParsingCarMakeDto) {
    return `This action updates a #${id} parsingCarMake`;
  }

  remove(id: number) {
    return `This action removes a #${id} parsingCarMake`;
  }
}
