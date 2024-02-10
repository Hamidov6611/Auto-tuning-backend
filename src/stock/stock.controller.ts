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
  Query
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Post('add')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'img', maxCount: 1 }]))
  create(@UploadedFiles() files, @Body() createStockDto: CreateStockDto) {
    const { img } = files;
    return this.stockService.create(createStockDto, img[0]);
  }

  @Patch(':id')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'img', maxCount: 1 }]))
  update(
    @Body() createStockDto: CreateStockDto,
    @Param('id') id: number,
    @UploadedFiles() files,
  ) {
    const { img } = files;
    return this.stockService.update(id, createStockDto, img ? img[0] : '');
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    return this.stockService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockService.remove(+id);
  }
}
