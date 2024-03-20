import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { RcPlusService } from './rc-plus.service';
import { CreateRcPlusDto } from './dto/create-rc-plus.dto';
import { UpdateRcPlusDto } from './dto/update-rc-plus.dto';

@Controller('rc-plus')
export class RcPlusController {
  constructor(private readonly rcPlusService: RcPlusService) {}

  @Post()
  create(@Body() createRcPlusDto: CreateRcPlusDto) {
    return this.rcPlusService.create(createRcPlusDto);
  }

  @Get('pagination')
  findAllByPageination(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.rcPlusService.findAllByPageination(page, limit);
  }

  @Get('engine/:id')
  findByEngine(@Param('id') id: number) {
    return this.rcPlusService.findByEngineId(id);
  }

  @Get()
  findAll() {
    return this.rcPlusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rcPlusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRcPlusDto: UpdateRcPlusDto) {
    return this.rcPlusService.update(+id, updateRcPlusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rcPlusService.remove(+id);
  }
}
