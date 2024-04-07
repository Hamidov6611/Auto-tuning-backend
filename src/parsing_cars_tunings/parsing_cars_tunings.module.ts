import { Module } from '@nestjs/common';
import { ParsingCarsTuningsService } from './parsing_cars_tunings.service';
import { ParsingCarsTuningsController } from './parsing_cars_tunings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParsingCarsEngine } from 'src/parsing_cars_engines/entities/parsing_cars_engine.entity';
import { ParsingCarsTuning } from './entities/parsing_cars_tuning.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ParsingCarsEngine, ParsingCarsTuning])
  ],
  controllers: [ParsingCarsTuningsController],
  providers: [ParsingCarsTuningsService],
})
export class ParsingCarsTuningsModule {}
