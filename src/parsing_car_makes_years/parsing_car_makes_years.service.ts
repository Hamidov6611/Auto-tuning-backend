import { Injectable } from '@nestjs/common';
import { CreateParsingCarMakesYearDto } from './dto/create-parsing_car_makes_year.dto';
import { UpdateParsingCarMakesYearDto } from './dto/update-parsing_car_makes_year.dto';
import { ParsingCarMake } from 'src/parsing_car_makes/entities/parsing_car_make.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ParsingCarMakesYear } from './entities/parsing_car_makes_year.entity';

@Injectable()
export class ParsingCarMakesYearsService {
  constructor(
    @InjectRepository(ParsingCarMakesYear)
    private readonly parsingCarMakeYearRepository: Repository<ParsingCarMakesYear>,
    @InjectRepository(ParsingCarMake)
    private readonly parsingCarMakeRepository: Repository<ParsingCarMake>,
  ) {}

  create(createParsingCarMakesYearDto: CreateParsingCarMakesYearDto) {
    return 'This action adds a new parsingCarMakesYear';
  }

  async findAll() {
    return await this.parsingCarMakeYearRepository.find({
      relations: { parent_id: true },
    });
  }

  async findOne(id: number) {
    return await this.parsingCarMakeYearRepository.findOne({
      where: {id},
      relations: {parsing_engine_id: true}
    })
  }

  update(
    id: number,
    updateParsingCarMakesYearDto: UpdateParsingCarMakesYearDto,
  ) {
    return `This action updates a #${id} parsingCarMakesYear`;
  }

  remove(id: number) {
    return `This action removes a #${id} parsingCarMakesYear`;
  }
}
