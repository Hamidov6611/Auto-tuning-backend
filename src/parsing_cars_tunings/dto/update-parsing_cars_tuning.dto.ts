import { PartialType } from '@nestjs/mapped-types';
import { CreateParsingCarsTuningDto } from './create-parsing_cars_tuning.dto';

export class UpdateParsingCarsTuningDto extends PartialType(CreateParsingCarsTuningDto) {}
