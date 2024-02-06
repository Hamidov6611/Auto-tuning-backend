import { Module } from '@nestjs/common';
import { AutoModelService } from './auto-model.service';
import { AutoModelController } from './auto-model.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileService } from 'src/file/file.service';
import { AutoModel } from './entities/auto-model.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AutoModel])],
  controllers: [AutoModelController],
  providers: [AutoModelService, FileService],
})
export class AutoModelModule {}
