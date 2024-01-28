import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  Query,
} from '@nestjs/common';
import { WorkService } from './work.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('work')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Post('add')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'img', maxCount: 1 }]))
  create(@UploadedFiles() files, @Body() createWorkDto: CreateWorkDto) {
    const { img } = files;
    return this.workService.create(createWorkDto, img[0]);
  }

  @Get()
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    return this.workService.findAll(page, limit);
  }

  @Get('main')
  searchHandler(@Query('search') search: string) {
    console.log(search);
    return this.workService.searchWorks(search);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.workService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkDto: UpdateWorkDto) {
    return this.workService.update(+id, updateWorkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workService.remove(+id);
  }
}
