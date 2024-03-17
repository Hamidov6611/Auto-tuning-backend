import { CreateCallDto } from './dto/create-call.dto';
import { Call } from './entities/call.entity';
import { Repository } from 'typeorm';
export declare class CallService {
    private readonly callRepository;
    constructor(callRepository: Repository<Call>);
    create(createCallDto: CreateCallDto): Promise<CreateCallDto & Call>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: Call[];
    }>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
