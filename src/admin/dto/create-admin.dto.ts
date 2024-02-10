import { IsEmail, IsISIN, IsString, MinLength } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  @MinLength(3)
  username: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @IsEmail()
  email: string;
}
