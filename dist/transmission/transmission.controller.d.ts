import { TransmissionService } from './transmission.service';
import { CreateTransmissionDto } from './dto/create-transmission.dto';
import { UpdateTransmissionDto } from './dto/update-transmission.dto';
export declare class TransmissionController {
    private readonly transmissionService;
    constructor(transmissionService: TransmissionService);
    create(createTransmissionDto: CreateTransmissionDto): Promise<string>;
    findAllByPageination(page: number, limit: number): Promise<{
        count: number;
        data: import("./entities/transmission.entity").Transmission[];
    }>;
    findByEngine(id: number): Promise<import("./entities/transmission.entity").Transmission[]>;
    findAll(): Promise<import("./entities/transmission.entity").Transmission[]>;
    findOne(id: string): Promise<import("./entities/transmission.entity").Transmission>;
    update(id: string, updateTransmissionDto: UpdateTransmissionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
