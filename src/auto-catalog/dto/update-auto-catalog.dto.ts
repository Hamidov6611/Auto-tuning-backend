import { PartialType } from '@nestjs/mapped-types';
import { CreateAutoCatalogDto } from './create-auto-catalog.dto';

export class UpdateAutoCatalogDto extends PartialType(CreateAutoCatalogDto) {}
