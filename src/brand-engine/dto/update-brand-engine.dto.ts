import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBrandEngineDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  year_id: number;
}
