import { ParsingCarMakesYear } from 'src/parsing_car_makes_years/entities/parsing_car_makes_year.entity';
import { ParsingCar } from 'src/parsing_cars/entities/parsing_car.entity';
export declare class ParsingCarMake {
    id: number;
    parent_id: ParsingCar;
    name: string;
    url: string;
    created_at: Date;
    updated_at: Date;
    parsing_car_makes_years_id: ParsingCarMakesYear[];
}
