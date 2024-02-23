import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback } from './entities/feedback.entity';
import { Repository } from 'typeorm';
export declare class FeedbackService {
    private readonly feedRepository;
    constructor(feedRepository: Repository<Feedback>);
    create(createFeedbackDto: CreateFeedbackDto): Promise<CreateFeedbackDto & Feedback>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: Feedback[];
    }>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
