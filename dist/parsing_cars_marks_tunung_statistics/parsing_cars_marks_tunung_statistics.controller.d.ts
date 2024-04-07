import { ParsingCarsMarksTunungStatisticsService } from './parsing_cars_marks_tunung_statistics.service';
import { CreateParsingCarsMarksTunungStatisticDto } from './dto/create-parsing_cars_marks_tunung_statistic.dto';
import { UpdateParsingCarsMarksTunungStatisticDto } from './dto/update-parsing_cars_marks_tunung_statistic.dto';
export declare class ParsingCarsMarksTunungStatisticsController {
    private readonly parsingCarsMarksTunungStatisticsService;
    constructor(parsingCarsMarksTunungStatisticsService: ParsingCarsMarksTunungStatisticsService);
    create(createParsingCarsMarksTunungStatisticDto: CreateParsingCarsMarksTunungStatisticDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateParsingCarsMarksTunungStatisticDto: UpdateParsingCarsMarksTunungStatisticDto): string;
    remove(id: string): string;
}
