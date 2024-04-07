import { CreateParsingCarsMarksTunungStatisticDto } from './dto/create-parsing_cars_marks_tunung_statistic.dto';
import { UpdateParsingCarsMarksTunungStatisticDto } from './dto/update-parsing_cars_marks_tunung_statistic.dto';
export declare class ParsingCarsMarksTunungStatisticsService {
    create(createParsingCarsMarksTunungStatisticDto: CreateParsingCarsMarksTunungStatisticDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateParsingCarsMarksTunungStatisticDto: UpdateParsingCarsMarksTunungStatisticDto): string;
    remove(id: number): string;
}
