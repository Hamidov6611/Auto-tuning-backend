import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, Query } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post('add')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'img', maxCount: 1 }]))
  create(@UploadedFiles() files, @Body() createBrandDto: CreateBrandDto) {
    const {img} = files
    return this.brandService.create(createBrandDto, img[0]);
  }
  @Patch(':id')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'img', maxCount: 1 }]))
  update(@UploadedFiles() files, @Param('id') id: number, @Body() updateBrandDto: UpdateBrandDto) {
    const {img} = files
    return this.brandService.update(id, updateBrandDto, img && img[0]);
  }
  @Get()
  findAll(@Query("page") page: number, @Query("limit") limit: number) {
    return this.brandService.findAll(page, limit);
  }

  @Get('getAll')
  getAll(@Query("catalog_id") catalog_id: number){
    return this.brandService.getAll(catalog_id)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandService.findOne(+id);
  }

  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandService.remove(+id);
  }
}
