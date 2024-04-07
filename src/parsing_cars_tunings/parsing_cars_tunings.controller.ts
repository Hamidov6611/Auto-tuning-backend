import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParsingCarsTuningsService } from './parsing_cars_tunings.service';
import { CreateParsingCarsTuningDto } from './dto/create-parsing_cars_tuning.dto';
import { UpdateParsingCarsTuningDto } from './dto/update-parsing_cars_tuning.dto';

@Controller('parsing-cars-tunings')
export class ParsingCarsTuningsController {
  constructor(private readonly parsingCarsTuningsService: ParsingCarsTuningsService) {}

  @Post()
  create(@Body() createParsingCarsTuningDto: CreateParsingCarsTuningDto) {
    return this.parsingCarsTuningsService.create(createParsingCarsTuningDto);
  }

  @Get()
  findAll() {
    return this.parsingCarsTuningsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parsingCarsTuningsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParsingCarsTuningDto: UpdateParsingCarsTuningDto) {
    return this.parsingCarsTuningsService.update(+id, updateParsingCarsTuningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parsingCarsTuningsService.remove(+id);
  }
}
