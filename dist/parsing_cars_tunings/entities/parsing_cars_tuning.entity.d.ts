import { ParsingCarsEngine } from 'src/parsing_cars_engines/entities/parsing_cars_engine.entity';
import { ParsingCarsMarksTunungStatistic } from 'src/parsing_cars_marks_tunung_statistics/entities/parsing_cars_marks_tunung_statistic.entity';
export declare class ParsingCarsTuning {
    id: number;
    parent_id: ParsingCarsEngine;
    name: string;
    url: string;
    created_at: Date;
    updated_at: Date;
    tuning_statistic_id: ParsingCarsMarksTunungStatistic[];
}
