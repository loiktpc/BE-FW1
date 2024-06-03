import { UsersService } from './../apis/users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}
  async signIn(useremail: string, pass: string): Promise<{ access_token: string }>{
    const user = await this.usersService.findOne(useremail);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    
    const payload = { sub: user.userId, useremail: user.useremail };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}