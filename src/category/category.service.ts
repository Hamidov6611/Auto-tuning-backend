import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const isCategory = await this.categoryRepository.findOne({
      where: {
        title: createCategoryDto.title,
      },
    });

    if (isCategory) {
      throw new BadRequestException('This category already created!');
    }

    return await this.categoryRepository.save(createCategoryDto);
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.categoryRepository.find({});
    const work = await this.categoryRepository.find({
      take: limit,
      skip: skip,
      order: {
        createdAt: 'ASC'
      },
    });
    return {
      count: count.length,
      data: work,
    };
  }

  async allCategory() {
    return await this.categoryRepository.find({})
  }

  async findOne(id: number) {
    const category = await this.categoryRepository.findOne({
      where: {
        id,
      },
    });

    if (category) {
      return category;
    }

    return 'This category not found';
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryRepository.update(id, updateCategoryDto);
  }

  async remove(id: number) {
    return await this.categoryRepository.delete(id);
  }
}
