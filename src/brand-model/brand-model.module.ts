import { Module } from '@nestjs/common';
import { BrandModelService } from './brand-model.service';
import { BrandModelController } from './brand-model.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandModel } from './entities/brand-model.entity';
import { Brand } from 'src/brand/entities/brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BrandModel, Brand])],
  controllers: [BrandModelController],
  providers: [BrandModelService],
})
export class BrandModelModule {}
