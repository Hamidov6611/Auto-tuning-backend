import { ParsingCarsTuning } from "src/parsing_cars_tunings/entities/parsing_cars_tuning.entity";
export declare class ParsingCarsMarksTunungStatistic {
    id: number;
    parent_id: ParsingCarsTuning;
    name: string;
    original: string;
    after_tuning: string;
    created_at: Date;
    updated_at: Date;
}
