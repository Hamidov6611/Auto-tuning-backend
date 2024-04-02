import { IsNumber, IsString } from 'class-validator';

export class CreateBrandEngineDto {
  @IsString()
  name: string;

  @IsString()
  type_engine: string;

  @IsString()
  engine_hp: string;

  @IsNumber()
  year_id: number;
}
