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
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post('add')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'img', maxCount: 1 }]))
  create(@UploadedFiles() files, @Body() createServiceDto: CreateServiceDto) {
    const { img } = files;
    return this.serviceService.create(createServiceDto, img[0]);
  }
  @Get('find')
  findByCategory(@Query('id') id: number) {
    return this.serviceService.findByCategory(id);
  }
  @Get(`all`)
  allService() {
    return this.serviceService.allService();
  }
  @Get()
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    return this.serviceService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'img', maxCount: 1 }]))
  update(
    @Body() updateServiceDto: UpdateServiceDto,
    @Param('id') id: number,
    @UploadedFiles() files,
  ) {
    const { img } = files;
    return this.serviceService.update(id, updateServiceDto, img ? img[0] : '');
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceService.remove(+id);
  }
}
