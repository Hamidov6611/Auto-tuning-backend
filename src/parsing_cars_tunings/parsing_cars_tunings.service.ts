import { Injectable } from '@nestjs/common';
import { CreateParsingCarsTuningDto } from './dto/create-parsing_cars_tuning.dto';
import { UpdateParsingCarsTuningDto } from './dto/update-parsing_cars_tuning.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ParsingCarsEngine } from 'src/parsing_cars_engines/entities/parsing_cars_engine.entity';
import { Repository } from 'typeorm';
import { ParsingCarsTuning } from './entities/parsing_cars_tuning.entity';

@Injectable()
export class ParsingCarsTuningsService {

  constructor(
    @InjectRepository(ParsingCarsTuning)
    private readonly parsingCarTuning: Repository<ParsingCarsTuning>,
    @InjectRepository(ParsingCarsEngine)
    private readonly parsingCarEngineRepository: Repository<ParsingCarsEngine>,
  ) {}

  create(createParsingCarsTuningDto: CreateParsingCarsTuningDto) {
    return 'This action adds a new parsingCarsTuning';
  }

  async findAll() {
    return await this.parsingCarTuning.find({});
  }

  async findOne(id: number) {
    return await this.parsingCarTuning.findOne({where: {id}, relations: {tuning_statistic_id: true}});
  }

  update(id: number, updateParsingCarsTuningDto: UpdateParsingCarsTuningDto) {
    return `This action updates a #${id} parsingCarsTuning`;
  }

  remove(id: number) {
    return `This action removes a #${id} parsingCarsTuning`;
  }
}
