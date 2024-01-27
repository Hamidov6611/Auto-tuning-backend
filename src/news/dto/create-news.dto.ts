import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateNewsDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  desc: string;

  @IsNotEmpty()
  img: string;
}
