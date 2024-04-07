import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
export declare class FeedbackController {
    private readonly feedbackService;
    constructor(feedbackService: FeedbackService);
    create(createFeedbackDto: CreateFeedbackDto): Promise<CreateFeedbackDto & import("./entities/feedback.entity").Feedback>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: import("./entities/feedback.entity").Feedback[];
    }>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
