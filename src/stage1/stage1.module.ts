import { Module } from '@nestjs/common';
import { Stage1Service } from './stage1.service';
import { Stage1Controller } from './stage1.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { Stage1 } from './entities/stage1.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BrandEngine, Stage1])
  ],
  controllers: [Stage1Controller],
  providers: [Stage1Service],
})
export class Stage1Module {}
