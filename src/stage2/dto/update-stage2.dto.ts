import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateStage2Dto {
  @IsNumber()
  @IsOptional()
  original_nm: number;

  @IsNumber()
  @IsOptional()
  after_nm: number;

  @IsNumber()
  @IsOptional()
  original_hp: number;

  @IsNumber()
  @IsOptional()
  after_hp: number;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  exception: string;

  @IsNumber()
  @IsOptional()
  engine_id: number;
}
