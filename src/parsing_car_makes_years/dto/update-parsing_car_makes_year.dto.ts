import { PartialType } from '@nestjs/mapped-types';
import { CreateParsingCarMakesYearDto } from './create-parsing_car_makes_year.dto';

export class UpdateParsingCarMakesYearDto extends PartialType(CreateParsingCarMakesYearDto) {}
