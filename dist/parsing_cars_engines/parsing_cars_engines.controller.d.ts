import { ParsingCarsEnginesService } from './parsing_cars_engines.service';
import { CreateParsingCarsEngineDto } from './dto/create-parsing_cars_engine.dto';
import { UpdateParsingCarsEngineDto } from './dto/update-parsing_cars_engine.dto';
export declare class ParsingCarsEnginesController {
    private readonly parsingCarsEnginesService;
    constructor(parsingCarsEnginesService: ParsingCarsEnginesService);
    create(createParsingCarsEngineDto: CreateParsingCarsEngineDto): string;
    findAll(): Promise<import("./entities/parsing_cars_engine.entity").ParsingCarsEngine[]>;
    findOne(id: string): Promise<import("./entities/parsing_cars_engine.entity").ParsingCarsEngine>;
    update(id: string, updateParsingCarsEngineDto: UpdateParsingCarsEngineDto): string;
    remove(id: string): string;
}
