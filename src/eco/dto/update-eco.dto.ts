import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateEcoDto {
  @IsNumber()
  @IsOptional()
  engine_id: number;

  @IsNumber()
  @IsOptional()
  original_nm: number;

  @IsNumber()
  @IsOptional()
  after_nm: number;

  @IsNumber()
  @IsOptional()
  percentage: number;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsOptional()
  @IsString()
  description: string;
}
