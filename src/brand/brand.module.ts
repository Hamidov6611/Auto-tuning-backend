import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { FileService } from 'src/file/file.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { Catalog } from 'src/catalog/entities/catalog.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Brand, Catalog])
  ],
  controllers: [BrandController],
  providers: [BrandService, FileService],
})
export class BrandModule {}
