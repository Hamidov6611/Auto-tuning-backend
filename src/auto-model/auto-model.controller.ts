import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, Query } from '@nestjs/common';
import { AutoModelService } from './auto-model.service';
import { CreateAutoModelDto } from './dto/create-auto-model.dto';
import { UpdateAutoModelDto } from './dto/update-auto-model.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('auto-model')
export class AutoModelController {
  constructor(private readonly autoModelService: AutoModelService) {}

  @Post('add')
  @UseInterceptors(FileFieldsInterceptor([{name: 'img', maxCount: 1}]))
  create(@UploadedFiles() files, @ Body() createAutoModelDto: CreateAutoModelDto) {
    const {img} = files
    return this.autoModelService.create(createAutoModelDto, img[0]);
  }

  @Get('model')
  getAllModel(){
    return this.autoModelService.getAllModel()
  }

  @Get()
  findAll(@Query("page") page: number, @Query("limit") limit: number) {
    return this.autoModelService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autoModelService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileFieldsInterceptor([{name: "img", maxCount: 1}]))
  update(@Param('id') id: string, @Body() updateAutoModelDto: UpdateAutoModelDto, @UploadedFiles() files) {
    const { img } = files
    return this.autoModelService.update(+id, updateAutoModelDto,  img ? img[0] : '');
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autoModelService.remove(+id);
  }
}
