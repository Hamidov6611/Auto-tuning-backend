import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileService, FileType } from 'src/file/file.service';
import { Stock } from './entities/stock.entity';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock) private readonly stockRepository: Repository<Stock>,
    private fileService: FileService,
  ) {}
  async create(createStockDto: CreateStockDto, picture: any) {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    const stock = await this.stockRepository.save({
      ...createStockDto,
      img: picturePath,
    });
    return stock;
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.stockRepository.find({});
    const stock = await this.stockRepository.find({
      take: limit,
      skip: skip,
      order: { createdAt: 'ASC' },
    });
    return {
      count: count.length,
      data: stock,
    };
  }

  async findOne(id: number) {
    return await this.stockRepository.find({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateStockDto: UpdateStockDto, picture: any) {
    if (picture) {
      const picturePath = this.fileService.updateFile(
        FileType.IMAGE,
        picture,
        updateStockDto.img,
      );
      const stock = await this.stockRepository.update(
        { id },
        { ...updateStockDto, img: picturePath },
      );
      return stock;
    } else {
      const result = await this.stockRepository.update({ id }, updateStockDto);
      return result;
    }
  }

  async remove(id: number) {
    const stock = await this.stockRepository.findOne({
      where: { id },
    });
    this.fileService.removeFile(stock.img);
    await this.stockRepository.delete(id);
    return 'deleted!';
  }
}
