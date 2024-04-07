import { Module } from '@nestjs/common';
import { ParsingCarMakesYearsService } from './parsing_car_makes_years.service';
import { ParsingCarMakesYearsController } from './parsing_car_makes_years.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParsingCarMake } from 'src/parsing_car_makes/entities/parsing_car_make.entity';
import { ParsingCarMakesYear } from './entities/parsing_car_makes_year.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParsingCarMake, ParsingCarMakesYear])],
  controllers: [ParsingCarMakesYearsController],
  providers: [ParsingCarMakesYearsService],
})
export class ParsingCarMakesYearsModule {}
