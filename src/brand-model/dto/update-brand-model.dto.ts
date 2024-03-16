import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandModelDto } from './create-brand-model.dto';

export class UpdateBrandModelDto extends PartialType(CreateBrandModelDto) {}
