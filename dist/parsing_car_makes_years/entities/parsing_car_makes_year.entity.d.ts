import { ParsingCarMake } from 'src/parsing_car_makes/entities/parsing_car_make.entity';
import { ParsingCarsEngine } from 'src/parsing_cars_engines/entities/parsing_cars_engine.entity';
export declare class ParsingCarMakesYear {
    id: number;
    parent_id: ParsingCarMake;
    years: string;
    url: string;
    created_at: Date;
    updated_at: Date;
    parsing_engine_id: ParsingCarsEngine[];
}
