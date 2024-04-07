import { ParsingCarMake } from 'src/parsing_car_makes/entities/parsing_car_make.entity';
export declare class ParsingCar {
    id: number;
    type: string;
    name: string;
    url: string;
    created_at: Date;
    updated_at: Date;
    parsing_make_id: ParsingCarMake[];
}
