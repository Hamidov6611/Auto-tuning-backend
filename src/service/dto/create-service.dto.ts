import { IsNotEmpty, IsString } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';

export class CreateServiceDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  category: Category;

  @IsString()
  @IsNotEmpty()
  img: string;

  @IsNotEmpty()
  price: number;

//   @IsString()
//   description:string;
}
