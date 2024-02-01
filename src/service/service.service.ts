import { BadRequestException, Injectable } from '@nestjs/common';
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
    console.log(id);
    return await this.serviceRepository.findOne({
      where: {
        id,
      },
      relations: {
        category: true,
      },
    });
  }

  async update(id: number, updateServiceDto: UpdateServiceDto, picture: any) {
    if (picture) {
      const picturePath = this.fileService.updateFile(
        FileType.IMAGE,
        picture,
        updateServiceDto.img,
      );
      const service = await this.serviceRepository.update(
        { id },
        { ...updateServiceDto, img: picturePath },
      );
      return service;
    } else {
      const result = await this.serviceRepository.update(
        { id },
        updateServiceDto,
      );
      return result;
    }
  }
  async remove(id: number) {
    await this.serviceRepository.delete(id);
    return 'Deleted successfully';
  }

  async findByCategory(id: number) {
    try {
      console.log(id);
      const res = await this.serviceRepository.find({
        where: {
          category: { id },
        },
      });
      if (!res) {
        throw new BadRequestException('This service not found!');
      }
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async allService() {
    const service = await this.serviceRepository.find({});
    return service;
  }
}
