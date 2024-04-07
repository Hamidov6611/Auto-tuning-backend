import { ParsingCarMakesYear } from 'src/parsing_car_makes_years/entities/parsing_car_makes_year.entity';
import { ParsingCarsTuning } from 'src/parsing_cars_tunings/entities/parsing_cars_tuning.entity';
export declare class ParsingCarsEngine {
    id: number;
    parent_id: ParsingCarMakesYear;
    name: string;
    type_engine: string;
    engine_hp: string;
    created_at: Date;
    updated_at: Date;
    tuning_id: ParsingCarsTuning[];
}
