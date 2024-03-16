import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BrandEngineService } from './brand-engine.service';
import { CreateBrandEngineDto } from './dto/create-brand-engine.dto';
import { UpdateBrandEngineDto } from './dto/update-brand-engine.dto';

@Controller('brand-engine')
export class BrandEngineController {
  constructor(private readonly brandEngineService: BrandEngineService) {}

  @Post()
  create(@Body() createBrandEngineDto: CreateBrandEngineDto) {
    return this.brandEngineService.create(createBrandEngineDto);
  }

  @Get("pagination")
  findAllByPageination(@Query("page") page: number, @Query("limit") limit: number) {
    return this.brandEngineService.findAllByPageination(page, limit);
  }

  @Get()
  findAll(){
    return this.brandEngineService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandEngineService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrandEngineDto: UpdateBrandEngineDto) {
    return this.brandEngineService.update(+id, updateBrandEngineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandEngineService.remove(+id);
  }
}
