import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { Stage2Service } from './stage2.service';
import { CreateStage2Dto } from './dto/create-stage2.dto';
import { UpdateStage2Dto } from './dto/update-stage2.dto';

@Controller('stage2')
export class Stage2Controller {
  constructor(private readonly stage2Service: Stage2Service) {}

  @Post()
  create(@Body() createStage2Dto: CreateStage2Dto) {
    return this.stage2Service.create(createStage2Dto);
  }

  @Get("pagination")
  findAllByPageination(@Query("page") page: number, @Query("limit") limit: number) {
    return this.stage2Service.findAllByPageination(page, limit);
  }

  @Get()
  findAll() {
    return this.stage2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stage2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStage2Dto: UpdateStage2Dto) {
    return this.stage2Service.update(+id, updateStage2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stage2Service.remove(+id);
  }
}
