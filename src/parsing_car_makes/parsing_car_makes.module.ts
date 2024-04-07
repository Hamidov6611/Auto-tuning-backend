import { Module } from '@nestjs/common';
import { ParsingCarMakesService } from './parsing_car_makes.service';
import { ParsingCarMakesController } from './parsing_car_makes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParsingCar } from 'src/parsing_cars/entities/parsing_car.entity';
import { ParsingCarMake } from './entities/parsing_car_make.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParsingCar, ParsingCarMake])],
  controllers: [ParsingCarMakesController],
  providers: [ParsingCarMakesService],
})
export class ParsingCarMakesModule {}
