import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { Stage1Service } from './stage1.service';
import { CreateStage1Dto } from './dto/create-stage1.dto';
import { UpdateStage1Dto } from './dto/update-stage1.dto';

@Controller('stage1')
export class Stage1Controller {
  constructor(private readonly stage1Service: Stage1Service) {}

  @Post()
  create(@Body() createStage1Dto: CreateStage1Dto) {
    return this.stage1Service.create(createStage1Dto);
  }

  @Get("pagination")
  findAllByPageination(@Query("page") page: number, @Query("limit") limit: number) {
    return this.stage1Service.findAllByPageination(page, limit);
  }

  @Get()
  findAll() {
    return this.stage1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stage1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStage1Dto: UpdateStage1Dto) {
    return this.stage1Service.update(+id, updateStage1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stage1Service.remove(+id);
  }
}
