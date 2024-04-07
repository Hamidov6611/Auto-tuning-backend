import { CallService } from './call.service';
import { CreateCallDto } from './dto/create-call.dto';
export declare class CallController {
    private readonly callService;
    constructor(callService: CallService);
    create(createCallDto: CreateCallDto): Promise<CreateCallDto & import("./entities/call.entity").Calls>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: import("./entities/call.entity").Calls[];
    }>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
