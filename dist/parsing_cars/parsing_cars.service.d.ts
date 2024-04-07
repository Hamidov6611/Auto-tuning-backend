import { CreateParsingCarDto } from './dto/create-parsing_car.dto';
import { UpdateParsingCarDto } from './dto/update-parsing_car.dto';
import { ParsingCar } from './entities/parsing_car.entity';
import { Repository } from 'typeorm';
export declare class ParsingCarsService {
    private readonly parsingCarRepository;
    constructor(parsingCarRepository: Repository<ParsingCar>);
    create(createParsingCarDto: CreateParsingCarDto): string;
    findAll(): Promise<ParsingCar[]>;
    findOne(id: number): Promise<ParsingCar>;
    update(id: number, updateParsingCarDto: UpdateParsingCarDto): string;
    remove(id: number): string;
}
