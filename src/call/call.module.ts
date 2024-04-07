import { Module } from '@nestjs/common';
import { CallService } from './call.service';
import { CallController } from './call.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calls } from './entities/call.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Calls])],
  controllers: [CallController],
  providers: [CallService],
})
export class CallModule {}
