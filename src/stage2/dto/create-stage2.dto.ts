import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateStage2Dto {
    @IsNumber()
    original_nm: number

    @IsNumber()
    after_nm: number

    @IsNumber()
    original_hp: number

    @IsNumber()
    after_hp: number

    @IsNumber()
    price: number

    @IsString()
    @IsOptional()
    description: string

    @IsString()
    @IsOptional()
    exception: string

    @IsNumber()
    engine_id: number
}
