import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    const existuser = await this.adminRepository.findOne({
      where: {
        email: createAdminDto.email,
      },
    });

    if (existuser) throw new BadRequestException('This email already exist');

    const admin = await this.adminRepository.save({
      email: createAdminDto.email,
      password: await argon2.hash(createAdminDto.password),
    });

    const token = this.jwtService.sign({ email: createAdminDto.email });

    return { admin, token };
  }

  async findOne(email: string) {
    return await this.adminRepository.findOne({ where: { email } });
  }
}
