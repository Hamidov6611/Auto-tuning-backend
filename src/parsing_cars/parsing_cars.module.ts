import { Module } from '@nestjs/common';
import { ParsingCarsService } from './parsing_cars.service';
import { ParsingCarsController } from './parsing_cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParsingCar } from './entities/parsing_car.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParsingCar])],
  controllers: [ParsingCarsController],
  providers: [ParsingCarsService],
})
export class ParsingCarsModule {}
