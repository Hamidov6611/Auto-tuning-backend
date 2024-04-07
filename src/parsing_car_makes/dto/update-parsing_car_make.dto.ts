import { PartialType } from '@nestjs/mapped-types';
import { CreateParsingCarMakeDto } from './create-parsing_car_make.dto';

export class UpdateParsingCarMakeDto extends PartialType(CreateParsingCarMakeDto) {}
