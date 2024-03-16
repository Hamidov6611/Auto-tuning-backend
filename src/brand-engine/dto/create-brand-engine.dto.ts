import { IsNumber, IsString } from 'class-validator';

export class CreateBrandEngineDto {
  @IsString()
  title: string;

  @IsNumber()
  year_id: number;
}
