import { Inject, Injectable, UnauthorizedException, forwardRef } from '@nestjs/common';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'src/admin/admin.service';
import { IAdmin } from 'src/types/types';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => AdminService))
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.adminService.findOne(email);
    const passwordIsMatch = await argon2.verify(user.password, password);

    if (user && passwordIsMatch) {
      return user;
    }

    throw new UnauthorizedException('User or password are incorrect!');
  }

  async login(admin: IAdmin) {
    const { email, id } = admin
    return {
      id, email, token: this.jwtService.sign({id: admin.id, email: admin.email})
    }
  }
}
