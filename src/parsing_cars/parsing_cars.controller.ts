import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParsingCarsService } from './parsing_cars.service';
import { CreateParsingCarDto } from './dto/create-parsing_car.dto';
import { UpdateParsingCarDto } from './dto/update-parsing_car.dto';

@Controller('parsing-cars')
export class ParsingCarsController {
  constructor(private readonly parsingCarsService: ParsingCarsService) {}

  @Post()
  create(@Body() createParsingCarDto: CreateParsingCarDto) {
    return this.parsingCarsService.create(createParsingCarDto);
  }

  @Get()
  findAll() {
    return this.parsingCarsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parsingCarsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParsingCarDto: UpdateParsingCarDto) {
    return this.parsingCarsService.update(+id, updateParsingCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parsingCarsService.remove(+id);
  }
}
