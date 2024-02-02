import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CallService } from './call.service';
import { CreateCallDto } from './dto/create-call.dto';

@Controller('call')
export class CallController {
  constructor(private readonly callService: CallService) {}

  @Post()
  create(@Body() createCallDto: CreateCallDto) {
    return this.callService.create(createCallDto);
  }

  @Get()
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    return this.callService.findAll(page, limit);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.callService.remove(+id);
  }
}
