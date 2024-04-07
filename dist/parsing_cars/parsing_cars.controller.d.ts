import { ParsingCarsService } from './parsing_cars.service';
import { CreateParsingCarDto } from './dto/create-parsing_car.dto';
import { UpdateParsingCarDto } from './dto/update-parsing_car.dto';
export declare class ParsingCarsController {
    private readonly parsingCarsService;
    constructor(parsingCarsService: ParsingCarsService);
    create(createParsingCarDto: CreateParsingCarDto): string;
    findAll(): Promise<import("./entities/parsing_car.entity").ParsingCar[]>;
    findOne(id: string): Promise<import("./entities/parsing_car.entity").ParsingCar>;
    update(id: string, updateParsingCarDto: UpdateParsingCarDto): string;
    remove(id: string): string;
}
