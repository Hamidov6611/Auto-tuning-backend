import { Module } from '@nestjs/common';
import { TransmissionService } from './transmission.service';
import { TransmissionController } from './transmission.controller';

@Module({
  controllers: [TransmissionController],
  providers: [TransmissionService],
})
export class TransmissionModule {}
