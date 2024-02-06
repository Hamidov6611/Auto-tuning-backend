import { Module } from '@nestjs/common';
import { AutoCatalogService } from './auto-catalog.service';
import { AutoCatalogController } from './auto-catalog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoCatalog } from './entities/auto-catalog.entity';
import { FileService } from 'src/file/file.service';
import { AutoModel } from 'src/auto-model/entities/auto-model.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AutoCatalog, AutoModel])],
  controllers: [AutoCatalogController],
  providers: [AutoCatalogService, FileService],
})
export class AutoCatalogModule {}
