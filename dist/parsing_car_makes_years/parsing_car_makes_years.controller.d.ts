import { ParsingCarMakesYearsService } from './parsing_car_makes_years.service';
import { CreateParsingCarMakesYearDto } from './dto/create-parsing_car_makes_year.dto';
import { UpdateParsingCarMakesYearDto } from './dto/update-parsing_car_makes_year.dto';
export declare class ParsingCarMakesYearsController {
    private readonly parsingCarMakesYearsService;
    constructor(parsingCarMakesYearsService: ParsingCarMakesYearsService);
    create(createParsingCarMakesYearDto: CreateParsingCarMakesYearDto): string;
    findAll(): Promise<import("./entities/parsing_car_makes_year.entity").ParsingCarMakesYear[]>;
    findOne(id: string): Promise<import("./entities/parsing_car_makes_year.entity").ParsingCarMakesYear[]>;
    update(id: string, updateParsingCarMakesYearDto: UpdateParsingCarMakesYearDto): string;
    remove(id: string): string;
}
