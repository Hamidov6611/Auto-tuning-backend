import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParsingCarsMarksTunungStatisticsService } from './parsing_cars_marks_tunung_statistics.service';
import { CreateParsingCarsMarksTunungStatisticDto } from './dto/create-parsing_cars_marks_tunung_statistic.dto';
import { UpdateParsingCarsMarksTunungStatisticDto } from './dto/update-parsing_cars_marks_tunung_statistic.dto';

@Controller('parsing-cars-marks-tunung-statistics')
export class ParsingCarsMarksTunungStatisticsController {
  constructor(private readonly parsingCarsMarksTunungStatisticsService: ParsingCarsMarksTunungStatisticsService) {}

  @Post()
  create(@Body() createParsingCarsMarksTunungStatisticDto: CreateParsingCarsMarksTunungStatisticDto) {
    return this.parsingCarsMarksTunungStatisticsService.create(createParsingCarsMarksTunungStatisticDto);
  }

  @Get()
  findAll() {
    return this.parsingCarsMarksTunungStatisticsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parsingCarsMarksTunungStatisticsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParsingCarsMarksTunungStatisticDto: UpdateParsingCarsMarksTunungStatisticDto) {
    return this.parsingCarsMarksTunungStatisticsService.update(+id, updateParsingCarsMarksTunungStatisticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parsingCarsMarksTunungStatisticsService.remove(+id);
  }
}
