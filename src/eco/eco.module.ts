import { Module } from '@nestjs/common';
import { EcoService } from './eco.service';
import { EcoController } from './eco.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { Eco } from './entities/eco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BrandEngine, Eco])],
  controllers: [EcoController],
  providers: [EcoService],
})
export class EcoModule {}
