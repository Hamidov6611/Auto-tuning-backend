import { CreateParsingCarsTuningDto } from './dto/create-parsing_cars_tuning.dto';
import { UpdateParsingCarsTuningDto } from './dto/update-parsing_cars_tuning.dto';
import { ParsingCarsEngine } from 'src/parsing_cars_engines/entities/parsing_cars_engine.entity';
import { Repository } from 'typeorm';
import { ParsingCarsTuning } from './entities/parsing_cars_tuning.entity';
export declare class ParsingCarsTuningsService {
    private readonly parsingCarTuning;
    private readonly parsingCarEngineRepository;
    constructor(parsingCarTuning: Repository<ParsingCarsTuning>, parsingCarEngineRepository: Repository<ParsingCarsEngine>);
    create(createParsingCarsTuningDto: CreateParsingCarsTuningDto): string;
    findAll(): Promise<ParsingCarsTuning[]>;
    findOne(id: number): Promise<ParsingCarsTuning>;
    update(id: number, updateParsingCarsTuningDto: UpdateParsingCarsTuningDto): string;
    remove(id: number): string;
}
