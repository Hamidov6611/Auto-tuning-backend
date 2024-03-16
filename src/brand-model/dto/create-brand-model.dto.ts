import { IsNotEmpty, IsString } from "class-validator"

export class CreateBrandModelDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsNotEmpty()   
    brand_id: number
}
