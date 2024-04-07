import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParsingCarMakesService } from './parsing_car_makes.service';
import { CreateParsingCarMakeDto } from './dto/create-parsing_car_make.dto';
import { UpdateParsingCarMakeDto } from './dto/update-parsing_car_make.dto';

@Controller('parsing-car-makes')
export class ParsingCarMakesController {
  constructor(private readonly parsingCarMakesService: ParsingCarMakesService) {}


  @Get()
  findAll() {
    return this.parsingCarMakesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parsingCarMakesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParsingCarMakeDto: UpdateParsingCarMakeDto) {
    return this.parsingCarMakesService.update(+id, updateParsingCarMakeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parsingCarMakesService.remove(+id);
  }
}
