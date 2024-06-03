import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/authorization.guard';
import { userDto } from 'src/apis/users/dto/users.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: userDto) {    
    return this.authService.signIn(signInDto.useremail, signInDto.password);
  }

  @UseGuards(AuthGuard) // auth token 
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}