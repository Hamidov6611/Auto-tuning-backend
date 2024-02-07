import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { FileService } from 'src/file/file.service';
import { Category } from 'src/category/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Service, Category])
  ],
  controllers: [ServiceController],
  providers: [ServiceService, FileService],
})
export class ServiceModule {}
