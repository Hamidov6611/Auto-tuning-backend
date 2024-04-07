import { PartialType } from '@nestjs/mapped-types';
import { CreateParsingCarsMarksTunungStatisticDto } from './create-parsing_cars_marks_tunung_statistic.dto';

export class UpdateParsingCarsMarksTunungStatisticDto extends PartialType(CreateParsingCarsMarksTunungStatisticDto) {}
