import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateCallDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsDate()
  @IsNotEmpty()
  date: Date;
}
