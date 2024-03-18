import { IsOptional, IsString } from "class-validator";

export class UpdateBrandYearDto {
  @IsString()
  @IsOptional()
  title: string;
}
