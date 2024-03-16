import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEcoDto {
  @IsNumber()
  engine_id: number;

  @IsNumber()
  original_nm: number;

  @IsNumber()
  after_nm: number;

  @IsNumber()
  percentage: number;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  description: string;
}
