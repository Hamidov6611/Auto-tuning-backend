import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Feedback } from './entities/feedback.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private readonly feedRepository: Repository<Feedback>,
  ) {}

  async create(createFeedbackDto: CreateFeedbackDto) {
    return await this.feedRepository.save(createFeedbackDto);
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.feedRepository.find({});
    const feed = await this.feedRepository.find({
      take: limit,
      skip: skip,
      order: {
        createdAt: 'ASC',
      },
    });
    return {
      count: count.length,
      data: feed,
    };
  }

  async remove(id: number) {
    return await this.feedRepository.delete(id);
  }
}
