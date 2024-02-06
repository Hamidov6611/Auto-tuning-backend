import { IsNotEmpty, IsString } from "class-validator";
import { AutoModel } from "src/auto-model/entities/auto-model.entity";

export class CreateAutoCatalogDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    img: string

    @IsNotEmpty()
    model: AutoModel

    @IsString()
    @IsNotEmpty()
    price: number
}
