import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, Query } from '@nestjs/common';
import { AutoCatalogService } from './auto-catalog.service';
import { CreateAutoCatalogDto } from './dto/create-auto-catalog.dto';
import { UpdateAutoCatalogDto } from './dto/update-auto-catalog.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('auto-catalog')
export class AutoCatalogController {
  constructor(private readonly autoCatalogService: AutoCatalogService) {}

  @Post('add')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'img', maxCount: 1 }, { name: 'video', maxCount: 1 },]))
  create(@UploadedFiles() files, @Body() createCatalogDto: CreateAutoCatalogDto) {
    const { img, video } = files;
    const imageFile = img ? img[0] : null;
    const videoFile = video ? video[0] : null;
    return this.autoCatalogService.create(createCatalogDto, imageFile, videoFile);
  }

  @Get()
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    return this.autoCatalogService.findAll(page, limit);
  }

  @Get('findByModel/:id')
  getByModel(@Param('id') id: string) { 
    return this.autoCatalogService.getCatalogByModel(id)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autoCatalogService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'img', maxCount: 1 }, { name: 'video', maxCount: 1 },]))
  update(@UploadedFiles() files, @Param('id') id: number, @Body() updateAutoCatalogDto: UpdateAutoCatalogDto) {
    const { img, video } = files;
    const imageFile = img ? img[0] : null;
    const videoFile = video ? video[0] : null;
    return this.autoCatalogService.update(id, updateAutoCatalogDto, imageFile, videoFile);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autoCatalogService.remove(+id);
  }
}
