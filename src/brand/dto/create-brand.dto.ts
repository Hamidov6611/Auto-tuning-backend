import { IsNotEmpty, IsString } from "class-validator";
import { Catalog } from "src/catalog/entities/catalog.entity";

export class CreateBrandDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    img: string

    @IsNotEmpty()   
    catalog_id: number
}
