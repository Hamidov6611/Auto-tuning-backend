import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TransmissionService } from './transmission.service';
import { CreateTransmissionDto } from './dto/create-transmission.dto';
import { UpdateTransmissionDto } from './dto/update-transmission.dto';

@Controller('transmission')
export class TransmissionController {
  constructor(private readonly transmissionService: TransmissionService) {}

  @Post()
  create(@Body() createTransmissionDto: CreateTransmissionDto) {
    return this.transmissionService.create(createTransmissionDto);
  }

  @Get("pagination")
  findAllByPageination(@Query("page") page: number, @Query("limit") limit: number) {
    return this.transmissionService.findAllByPageination(page, limit);
  }

  @Get('engine/:id')
  findByEngine(@Param('id') id: number) {
    return this.transmissionService.findByEngineId(id);
  }

  @Get()
  findAll() {
    return this.transmissionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transmissionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransmissionDto: UpdateTransmissionDto) {
    return this.transmissionService.update(+id, updateTransmissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transmissionService.remove(+id);
  }
}
