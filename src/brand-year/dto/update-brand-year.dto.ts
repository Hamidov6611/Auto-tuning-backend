import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandYearDto } from './create-brand-year.dto';

export class UpdateBrandYearDto extends PartialType(CreateBrandYearDto) {}
