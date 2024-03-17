import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRcPlusDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  engine_id: number;

  @IsString()
  @IsOptional()
  hero: string;
}
