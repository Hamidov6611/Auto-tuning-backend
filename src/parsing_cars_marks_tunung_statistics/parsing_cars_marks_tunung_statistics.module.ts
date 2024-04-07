import { Module } from '@nestjs/common';
import { ParsingCarsMarksTunungStatisticsService } from './parsing_cars_marks_tunung_statistics.service';
import { ParsingCarsMarksTunungStatisticsController } from './parsing_cars_marks_tunung_statistics.controller';

@Module({
  controllers: [ParsingCarsMarksTunungStatisticsController],
  providers: [ParsingCarsMarksTunungStatisticsService],
})
export class ParsingCarsMarksTunungStatisticsModule {}
