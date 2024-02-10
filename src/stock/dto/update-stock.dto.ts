import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateStockDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  title: string;

  @IsOptional()
  @IsString()
  @MinLength(5)
  description: string;

  @IsOptional()
  img: string;
}
