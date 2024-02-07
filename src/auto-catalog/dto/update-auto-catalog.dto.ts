import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAutoCatalogDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  img: string;

  @IsString()
  @IsOptional()
  video: string;

  @IsString()
  @IsOptional()
  price: number;
  
  @IsOptional()
  @IsNumber()
  modelId: number;
}
