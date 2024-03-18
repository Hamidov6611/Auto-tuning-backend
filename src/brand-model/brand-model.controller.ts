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
import { BrandModelService } from './brand-model.service';
import { CreateBrandModelDto } from './dto/create-brand-model.dto';
import { UpdateBrandModelDto } from './dto/update-brand-model.dto';

@Controller('brand-model')
export class BrandModelController {
  constructor(private readonly brandModelService: BrandModelService) {}

  @Post()
  create(@Body() createBrandModelDto: CreateBrandModelDto) {
    return this.brandModelService.create(createBrandModelDto);
  }

  @Get('pagination')
  findAllByPageination(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.brandModelService.findAllByPageination(page, limit);
  }

  @Get('sort/:id')
  sortById(@Param('id') id: number) {
    return this.brandModelService.sortByModel(id);
  }

  @Get()
  findAll() {
    return this.brandModelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandModelService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBrandModelDto: UpdateBrandModelDto,
  ) {
    return this.brandModelService.update(+id, updateBrandModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandModelService.remove(+id);
  }
}
