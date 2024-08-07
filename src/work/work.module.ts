import { Module } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkController } from './work.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Work } from './entities/work.entity';
import { FileService } from 'src/file/file.service';
import { Tag } from 'src/tag/entities/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Work, Tag])],
  controllers: [WorkController],
  providers: [WorkService, FileService],
})
export class WorkModule {}
