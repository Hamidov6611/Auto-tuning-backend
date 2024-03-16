import { CreateTransmissionDto } from './dto/create-transmission.dto';
import { UpdateTransmissionDto } from './dto/update-transmission.dto';
export declare class TransmissionService {
    create(createTransmissionDto: CreateTransmissionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTransmissionDto: UpdateTransmissionDto): string;
    remove(id: number): string;
}
