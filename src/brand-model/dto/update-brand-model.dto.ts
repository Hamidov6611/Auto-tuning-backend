import { IsOptional, IsString } from "class-validator"


export class UpdateBrandModelDto {
    @IsString()
    @IsOptional()
    title: string
}
