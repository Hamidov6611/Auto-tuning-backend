import { PartialType } from '@nestjs/mapped-types';
import { CreateNewsDto } from './create-news.dto';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateNewsDto {
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
