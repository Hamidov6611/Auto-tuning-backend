import { IsString, MinLength } from 'class-validator';

export class CreateCatalogDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  img: string;
}
