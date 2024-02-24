import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, Query } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CreateCatalogDto } from './dto/create-catalog.dto';
import { UpdateCatalogDto } from './dto/update-catalog.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('catalog')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Post('add')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'img', maxCount: 1 }]))
  create(@UploadedFiles() files, @Body() createCatalogDto: CreateCatalogDto) {
    const { img } = files;
    return this.catalogService.create(createCatalogDto, img[0]);
  }

  @Get()
  findAll(@Query("page") page: number, @Query("limit") limit: number) {
    return this.catalogService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catalogService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'img', maxCount: 1 }]))
  update(
    @Body() createCatlogDto: CreateCatalogDto,
    @Param('id') id: number,
    @UploadedFiles() files,
  ) {
    const { img } = files;
    return this.catalogService.update(id, createCatlogDto, img ? img[0] : '');
  }

  @Get('brand/:id')
  getCatalogByBrand(@Param('id') id: number) {
    return this.catalogService.getByBrand(id)
  } 

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catalogService.remove(+id);
  }
}
