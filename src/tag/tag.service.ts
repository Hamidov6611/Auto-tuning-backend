import { HttpException, Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagService {

  constructor(@InjectRepository(Tag) private readonly tagRepository: Repository<Tag>) { }

  async create(createTagDto: CreateTagDto) {
    const newTag = await this.tagRepository.create(createTagDto);
    await this.tagRepository.save(newTag);
    return newTag
  }

  async findAll() {
    return await this.tagRepository.find({ relations: { works: true } });
  }

  async findOne(id: number) {
    return await this.tagRepository.findOne({
      where: {
        id
      },
      relations: { works: true },
    });
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    return await this.tagRepository.update({ id }, updateTagDto);
  }

  async remove(id: number) {
    return await this.tagRepository.delete(id);
  }

  async filterByTag(id: number) {
    return await this.tagRepository.find({
      where: { id },
      relations: { works: true },
    });
  }
}
