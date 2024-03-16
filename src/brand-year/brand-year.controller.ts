import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BrandYearService } from './brand-year.service';
import { CreateBrandYearDto } from './dto/create-brand-year.dto';
import { UpdateBrandYearDto } from './dto/update-brand-year.dto';

@Controller('brand-year')
export class BrandYearController {
  constructor(private readonly brandYearService: BrandYearService) {}

  @Post()
  create(@Body() createBrandYearDto: CreateBrandYearDto) {
    return this.brandYearService.create(createBrandYearDto);
  }

  @Get("pagination")
  findAllByPageination(@Query("page") page: number, @Query("limit") limit: number) {
    return this.brandYearService.findAllByPageination(page, limit);
  }

  @Get()
  findAll() {
    return this.brandYearService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandYearService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrandYearDto: UpdateBrandYearDto) {
    return this.brandYearService.update(+id, updateBrandYearDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandYearService.remove(+id);
  }
}
