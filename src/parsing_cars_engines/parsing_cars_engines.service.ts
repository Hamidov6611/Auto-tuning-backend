import { Injectable } from '@nestjs/common';
import { CreateParsingCarsEngineDto } from './dto/create-parsing_cars_engine.dto';
import { UpdateParsingCarsEngineDto } from './dto/update-parsing_cars_engine.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ParsingCarMakesYear } from 'src/parsing_car_makes_years/entities/parsing_car_makes_year.entity';
import { Repository } from 'typeorm';
import { ParsingCarsEngine } from './entities/parsing_cars_engine.entity';

@Injectable()
export class ParsingCarsEnginesService {
  constructor(
    @InjectRepository(ParsingCarMakesYear)
    private readonly parsingCarMakeYearRepository: Repository<ParsingCarMakesYear>,
    @InjectRepository(ParsingCarsEngine)
    private readonly parsingCarEngineRepository: Repository<ParsingCarsEngine>,
  ) {}

  create(createParsingCarsEngineDto: CreateParsingCarsEngineDto) {
    return 'This action adds a new parsingCarsEngine';
  }

  async findAll() {
    return await this.parsingCarEngineRepository.find({
      relations: { parent_id: true },
    });
  }

  async findOne(id: number) {
    return await this.parsingCarEngineRepository.findOne({
      where: { id },
      relations: { tuning_id: true },
    });
  }

  update(id: number, updateParsingCarsEngineDto: UpdateParsingCarsEngineDto) {
    return `This action updates a #${id} parsingCarsEngine`;
  }

  remove(id: number) {
    return `This action removes a #${id} parsingCarsEngine`;
  }
}
