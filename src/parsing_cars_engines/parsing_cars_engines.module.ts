import { Module } from '@nestjs/common';
import { ParsingCarsEnginesService } from './parsing_cars_engines.service';
import { ParsingCarsEnginesController } from './parsing_cars_engines.controller';
import { ParsingCarsEngine } from './entities/parsing_cars_engine.entity';
import { ParsingCarMakesYear } from 'src/parsing_car_makes_years/entities/parsing_car_makes_year.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ParsingCarsEngine, ParsingCarMakesYear])],
  controllers: [ParsingCarsEnginesController],
  providers: [ParsingCarsEnginesService],
})
export class ParsingCarsEnginesModule {}
