import { IsOptional, IsString } from 'class-validator';

export class UpdateAutoModelDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  img: string;
}
