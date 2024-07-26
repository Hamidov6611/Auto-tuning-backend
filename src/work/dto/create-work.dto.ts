import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateWorkDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  description:string;

  @IsNotEmpty()
  img: string;

  @IsNotEmpty()
  tagId: number;
}
