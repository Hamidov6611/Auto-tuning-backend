import { Module } from '@nestjs/common';
import { BrandEngineService } from './brand-engine.service';
import { BrandEngineController } from './brand-engine.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandYear } from 'src/brand-year/entities/brand-year.entity';
import { BrandEngine } from './entities/brand-engine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BrandYear, BrandEngine])],
  controllers: [BrandEngineController],
  providers: [BrandEngineService],
})
export class BrandEngineModule {}
