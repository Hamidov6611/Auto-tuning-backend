import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParsingCarsEnginesService } from './parsing_cars_engines.service';
import { CreateParsingCarsEngineDto } from './dto/create-parsing_cars_engine.dto';
import { UpdateParsingCarsEngineDto } from './dto/update-parsing_cars_engine.dto';

@Controller('parsing-cars-engines')
export class ParsingCarsEnginesController {
  constructor(private readonly parsingCarsEnginesService: ParsingCarsEnginesService) {}

  @Post()
  create(@Body() createParsingCarsEngineDto: CreateParsingCarsEngineDto) {
    return this.parsingCarsEnginesService.create(createParsingCarsEngineDto);
  }

  @Get()
  findAll() {
    return this.parsingCarsEnginesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parsingCarsEnginesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParsingCarsEngineDto: UpdateParsingCarsEngineDto) {
    return this.parsingCarsEnginesService.update(+id, updateParsingCarsEngineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parsingCarsEnginesService.remove(+id);
  }
}
