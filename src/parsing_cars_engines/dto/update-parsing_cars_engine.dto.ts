import { PartialType } from '@nestjs/mapped-types';
import { CreateParsingCarsEngineDto } from './create-parsing_cars_engine.dto';

export class UpdateParsingCarsEngineDto extends PartialType(CreateParsingCarsEngineDto) {}
