import { Injectable } from '@nestjs/common';
import { CreateParsingCarsMarksTunungStatisticDto } from './dto/create-parsing_cars_marks_tunung_statistic.dto';
import { UpdateParsingCarsMarksTunungStatisticDto } from './dto/update-parsing_cars_marks_tunung_statistic.dto';

@Injectable()
export class ParsingCarsMarksTunungStatisticsService {
  create(createParsingCarsMarksTunungStatisticDto: CreateParsingCarsMarksTunungStatisticDto) {
    return 'This action adds a new parsingCarsMarksTunungStatistic';
  }

  findAll() {
    return `This action returns all parsingCarsMarksTunungStatistics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parsingCarsMarksTunungStatistic`;
  }

  update(id: number, updateParsingCarsMarksTunungStatisticDto: UpdateParsingCarsMarksTunungStatisticDto) {
    return `This action updates a #${id} parsingCarsMarksTunungStatistic`;
  }

  remove(id: number) {
    return `This action removes a #${id} parsingCarsMarksTunungStatistic`;
  }
}
