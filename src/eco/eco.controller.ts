import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EcoService } from './eco.service';
import { CreateEcoDto } from './dto/create-eco.dto';
import { UpdateEcoDto } from './dto/update-eco.dto';

@Controller('eco')
export class EcoController {
  constructor(private readonly ecoService: EcoService) {}

  @Post()
  create(@Body() createEcoDto: CreateEcoDto) {
    return this.ecoService.create(createEcoDto);
  }

  @Get('pagination')
  findAllByPageination(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.ecoService.findAllByPageination(page, limit);
  }

  @Get()
  findAll() {
    return this.ecoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ecoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEcoDto: UpdateEcoDto) {
    return this.ecoService.update(+id, updateEcoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ecoService.remove(+id);
  }

  @Get('engine/:id')
  findByEngine(@Param('id') id: number) {
    return this.ecoService.findByEngineId(id);
  }
}
