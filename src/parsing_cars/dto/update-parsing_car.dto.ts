import { PartialType } from '@nestjs/mapped-types';
import { CreateParsingCarDto } from './create-parsing_car.dto';

export class UpdateParsingCarDto extends PartialType(CreateParsingCarDto) {}
