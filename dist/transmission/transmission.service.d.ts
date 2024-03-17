import { CreateTransmissionDto } from './dto/create-transmission.dto';
import { UpdateTransmissionDto } from './dto/update-transmission.dto';
import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { Repository } from 'typeorm';
import { Transmission } from './entities/transmission.entity';
export declare class TransmissionService {
    private readonly engineRepository;
    private readonly transmissionRepositiry;
    constructor(engineRepository: Repository<BrandEngine>, transmissionRepositiry: Repository<Transmission>);
    create(createTransmissionDto: CreateTransmissionDto): Promise<string>;
    findAllByPageination(page: number, limit: number): Promise<{
        count: number;
        data: Transmission[];
    }>;
    findAll(): Promise<Transmission[]>;
    findOne(id: number): Promise<Transmission>;
    update(id: number, updateTransmissionDto: UpdateTransmissionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
