import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';

export class UpdateServiceDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsNotEmpty()
  category: Category;

  @IsString()
  @IsOptional()
  img: string;

  @IsOptional()
  price: number;
}
