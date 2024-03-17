import { EcoService } from './eco.service';
import { CreateEcoDto } from './dto/create-eco.dto';
import { UpdateEcoDto } from './dto/update-eco.dto';
export declare class EcoController {
    private readonly ecoService;
    constructor(ecoService: EcoService);
    create(createEcoDto: CreateEcoDto): Promise<string>;
    findAllByPageination(page: number, limit: number): Promise<{
        count: number;
        data: import("./entities/eco.entity").Eco[];
    }>;
    findAll(): Promise<import("./entities/eco.entity").Eco[]>;
    findOne(id: string): Promise<import("./entities/eco.entity").Eco>;
    update(id: string, updateEcoDto: UpdateEcoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
