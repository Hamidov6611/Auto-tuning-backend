import { Module } from '@nestjs/common';
import { BrandYearService } from './brand-year.service';
import { BrandYearController } from './brand-year.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandModel } from 'src/brand-model/entities/brand-model.entity';
import { BrandYear } from './entities/brand-year.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BrandModel, BrandYear])],
  controllers: [BrandYearController],
  providers: [BrandYearService],
})
export class BrandYearModule {}
