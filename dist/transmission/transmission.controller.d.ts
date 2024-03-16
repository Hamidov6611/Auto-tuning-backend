import { TransmissionService } from './transmission.service';
import { CreateTransmissionDto } from './dto/create-transmission.dto';
import { UpdateTransmissionDto } from './dto/update-transmission.dto';
export declare class TransmissionController {
    private readonly transmissionService;
    constructor(transmissionService: TransmissionService);
    create(createTransmissionDto: CreateTransmissionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTransmissionDto: UpdateTransmissionDto): string;
    remove(id: string): string;
}
