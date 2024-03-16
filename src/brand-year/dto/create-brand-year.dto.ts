import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBrandYearDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  model_id: number;
}
