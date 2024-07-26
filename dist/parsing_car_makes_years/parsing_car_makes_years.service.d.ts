import { CreateParsingCarMakesYearDto } from './dto/create-parsing_car_makes_year.dto';
import { UpdateParsingCarMakesYearDto } from './dto/update-parsing_car_makes_year.dto';
import { ParsingCarMake } from 'src/parsing_car_makes/entities/parsing_car_make.entity';
import { Repository } from 'typeorm';
import { ParsingCarMakesYear } from './entities/parsing_car_makes_year.entity';
export declare class ParsingCarMakesYearsService {
    private readonly parsingCarMakeYearRepository;
    private readonly parsingCarMakeRepository;
    constructor(parsingCarMakeYearRepository: Repository<ParsingCarMakesYear>, parsingCarMakeRepository: Repository<ParsingCarMake>);
    create(createParsingCarMakesYearDto: CreateParsingCarMakesYearDto): string;
    findAll(): Promise<ParsingCarMakesYear[]>;
    findOne(id: number): Promise<ParsingCarMakesYear>;
    update(id: number, updateParsingCarMakesYearDto: UpdateParsingCarMakesYearDto): string;
    remove(id: number): string;
}
