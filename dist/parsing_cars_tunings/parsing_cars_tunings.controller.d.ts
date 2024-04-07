import { ParsingCarsTuningsService } from './parsing_cars_tunings.service';
import { CreateParsingCarsTuningDto } from './dto/create-parsing_cars_tuning.dto';
import { UpdateParsingCarsTuningDto } from './dto/update-parsing_cars_tuning.dto';
export declare class ParsingCarsTuningsController {
    private readonly parsingCarsTuningsService;
    constructor(parsingCarsTuningsService: ParsingCarsTuningsService);
    create(createParsingCarsTuningDto: CreateParsingCarsTuningDto): string;
    findAll(): Promise<import("./entities/parsing_cars_tuning.entity").ParsingCarsTuning[]>;
    findOne(id: string): Promise<import("./entities/parsing_cars_tuning.entity").ParsingCarsTuning>;
    update(id: string, updateParsingCarsTuningDto: UpdateParsingCarsTuningDto): string;
    remove(id: string): string;
}
