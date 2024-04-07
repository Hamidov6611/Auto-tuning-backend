import { ParsingCarMakesService } from './parsing_car_makes.service';
import { UpdateParsingCarMakeDto } from './dto/update-parsing_car_make.dto';
export declare class ParsingCarMakesController {
    private readonly parsingCarMakesService;
    constructor(parsingCarMakesService: ParsingCarMakesService);
    findAll(): Promise<import("./entities/parsing_car_make.entity").ParsingCarMake[]>;
    findOne(id: string): Promise<import("./entities/parsing_car_make.entity").ParsingCarMake>;
    update(id: string, updateParsingCarMakeDto: UpdateParsingCarMakeDto): string;
    remove(id: string): string;
}
