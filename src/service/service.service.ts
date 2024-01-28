import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';
import { FileService, FileType } from 'src/file/file.service';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
    private fileService: FileService,
  ) {}

  async create(createServiceDto: CreateServiceDto, picture: any) {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    const service = await this.serviceRepository.save({
      ...createServiceDto,
      img: picturePath,
    });
    return service;
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.serviceRepository.find({});
    const service = await this.serviceRepository.find({
      take: limit,
      skip: skip,
      order: { createdAt: 'DESC' },
      relations: {
        category: true,
      },
    });

    return {
      count: count.length,
      data: service,
    };
  }

  async findOne(id: number) {
    return await this.serviceRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    return await this.serviceRepository.update(id, updateServiceDto);
  }

  async remove(id: number) {
    await this.serviceRepository.delete(id);
    return 'Deleted successfully';
  }
}
