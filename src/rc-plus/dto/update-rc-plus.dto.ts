import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRcPlusDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumber()
  @IsOptional()
  engine_id: number;

  @IsString()
  @IsOptional()
  hero: string;
}
