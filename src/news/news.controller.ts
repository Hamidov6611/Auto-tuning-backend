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
  UseGuards,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post('add')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'img', maxCount: 1 }]))
  create(@UploadedFiles() files, @Body() createNewsDto: CreateNewsDto) {
    const { img } = files;
    console.log(img);
    console.log(createNewsDto);
    return this.newsService.create(createNewsDto, img[0]);
  }

  @Patch(':id')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'img', maxCount: 1 }]))
  update(
    @Body() createNewsDto: CreateNewsDto,
    @Param('id') id: number,
    @UploadedFiles() files,
  ) {
    const { img } = files;
    return this.newsService.update(id, createNewsDto, img ? img[0] : '');
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    return this.newsService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsService.remove(+id);
  }
}
