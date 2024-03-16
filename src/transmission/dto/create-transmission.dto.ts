import { IsNumber, IsString } from 'class-validator';

export class CreateTransmissionDto {
  @IsString()
  description: string;

  @IsString()
  list: string;

  @IsNumber()
  price: number;

  @IsNumber()
  engine_id: number;
}
