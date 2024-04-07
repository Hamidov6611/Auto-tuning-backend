import { CreateCallDto } from './dto/create-call.dto';
import { Calls } from './entities/call.entity';
import { Repository } from 'typeorm';
export declare class CallService {
    private readonly callRepository;
    constructor(callRepository: Repository<Calls>);
    create(createCallDto: CreateCallDto): Promise<CreateCallDto & Calls>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: Calls[];
    }>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
