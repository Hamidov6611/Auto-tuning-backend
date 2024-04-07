import { CreateParsingCarsEngineDto } from './dto/create-parsing_cars_engine.dto';
import { UpdateParsingCarsEngineDto } from './dto/update-parsing_cars_engine.dto';
import { ParsingCarMakesYear } from 'src/parsing_car_makes_years/entities/parsing_car_makes_year.entity';
import { Repository } from 'typeorm';
import { ParsingCarsEngine } from './entities/parsing_cars_engine.entity';
export declare class ParsingCarsEnginesService {
    private readonly parsingCarMakeYearRepository;
    private readonly parsingCarEngineRepository;
    constructor(parsingCarMakeYearRepository: Repository<ParsingCarMakesYear>, parsingCarEngineRepository: Repository<ParsingCarsEngine>);
    create(createParsingCarsEngineDto: CreateParsingCarsEngineDto): string;
    findAll(): Promise<ParsingCarsEngine[]>;
    findOne(id: number): Promise<ParsingCarsEngine>;
    update(id: number, updateParsingCarsEngineDto: UpdateParsingCarsEngineDto): string;
    remove(id: number): string;
}
