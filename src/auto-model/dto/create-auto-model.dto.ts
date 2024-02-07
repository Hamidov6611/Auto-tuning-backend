import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAutoModelDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  img: string;
}
