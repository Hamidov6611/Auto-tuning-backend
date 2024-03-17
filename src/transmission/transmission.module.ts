import { Module } from '@nestjs/common';
import { TransmissionService } from './transmission.service';
import { TransmissionController } from './transmission.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { Transmission } from './entities/transmission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BrandEngine, Transmission])],
  controllers: [TransmissionController],
  providers: [TransmissionService],
})
export class TransmissionModule {}
