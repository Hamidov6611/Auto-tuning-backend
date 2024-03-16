import { Module } from '@nestjs/common';
import { Stage2Service } from './stage2.service';
import { Stage2Controller } from './stage2.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { Stage2 } from './entities/stage2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BrandEngine, Stage2])],
  controllers: [Stage2Controller],
  providers: [Stage2Service],
})
export class Stage2Module {}
