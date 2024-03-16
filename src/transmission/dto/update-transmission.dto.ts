import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTransmissionDto {
  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  list: string;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsNumber()
  @IsOptional()
  engine_id: number;
}
