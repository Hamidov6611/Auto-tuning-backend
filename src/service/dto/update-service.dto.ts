import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';

export class UpdateServiceDto {
  @IsString()
  @IsOptional()
  title: string;

  // @IsOptional()
  // category: Category;

  @IsOptional()
  @IsNumber()
  category_id: number
  

  @IsString()
  @IsOptional()
  img: string;

  @IsOptional()
  price: number;
}
