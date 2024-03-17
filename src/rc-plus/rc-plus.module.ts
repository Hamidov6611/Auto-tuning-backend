import { Module } from '@nestjs/common';
import { RcPlusService } from './rc-plus.service';
import { RcPlusController } from './rc-plus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { RcPlus } from './entities/rc-plus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BrandEngine, RcPlus])],
  controllers: [RcPlusController],
  providers: [RcPlusService],
})
export class RcPlusModule {}
