import { IsOptional, IsString } from 'class-validator';

export class UpdateBrandDto {
    @IsString()
    @IsOptional()
    title: string

    @IsString()
    @IsOptional()
    img: string

    @IsOptional() 
    catalog_id: number
}
