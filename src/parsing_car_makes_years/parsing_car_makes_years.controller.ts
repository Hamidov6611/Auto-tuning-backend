import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParsingCarMakesYearsService } from './parsing_car_makes_years.service';
import { CreateParsingCarMakesYearDto } from './dto/create-parsing_car_makes_year.dto';
import { UpdateParsingCarMakesYearDto } from './dto/update-parsing_car_makes_year.dto';

@Controller('parsing-car-makes-years')
export class ParsingCarMakesYearsController {
  constructor(private readonly parsingCarMakesYearsService: ParsingCarMakesYearsService) {}

  @Post()
  create(@Body() createParsingCarMakesYearDto: CreateParsingCarMakesYearDto) {
    return this.parsingCarMakesYearsService.create(createParsingCarMakesYearDto);
  }

  @Get()
  findAll() {
    return this.parsingCarMakesYearsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parsingCarMakesYearsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParsingCarMakesYearDto: UpdateParsingCarMakesYearDto) {
    return this.parsingCarMakesYearsService.update(+id, updateParsingCarMakesYearDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parsingCarMakesYearsService.remove(+id);
  }
}
