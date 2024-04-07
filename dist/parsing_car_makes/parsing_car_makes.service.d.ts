import { CreateParsingCarMakeDto } from './dto/create-parsing_car_make.dto';
import { UpdateParsingCarMakeDto } from './dto/update-parsing_car_make.dto';
import { ParsingCar } from 'src/parsing_cars/entities/parsing_car.entity';
import { Repository } from 'typeorm';
import { ParsingCarMake } from './entities/parsing_car_make.entity';
export declare class ParsingCarMakesService {
    private readonly parsingCarRepository;
    private readonly parsingCarMakeRepository;
    constructor(parsingCarRepository: Repository<ParsingCar>, parsingCarMakeRepository: Repository<ParsingCarMake>);
    create(createParsingCarMakeDto: CreateParsingCarMakeDto): string;
    findAll(): Promise<ParsingCarMake[]>;
    findOne(id: number): Promise<ParsingCarMake>;
    update(id: number, updateParsingCarMakeDto: UpdateParsingCarMakeDto): string;
    remove(id: number): string;
}
