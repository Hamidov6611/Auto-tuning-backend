import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBrandEngineDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsNumber()
  @IsOptional()
  year_id: number;
}
