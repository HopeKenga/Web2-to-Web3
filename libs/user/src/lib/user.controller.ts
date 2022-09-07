import { Body, Controller, Get, Post, HttpStatus, UseGuards, Res, UnauthorizedException } from '@nestjs/common';
import { Response } from 'express';
import { Prisma } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

import { UserService } from './user.service';
import { AuthService } from '@interview/auth';
import { RegisterDTO } from '../dto/register.dto';

@Controller('v1')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}


  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUserCredentials(username, password);
    console.log('user', user);

    if (!user) {
        throw new UnauthorizedException('Invalid credentials, user not found');
    }

    return user;
}
  
  @Post('signin')
  async createUser(@Body() params: RegisterDTO, @Res() res: Response) {
    const { username, password } = params;
    // Validate if user already exists
    const isUserU = await this.userService.findOneByUsername(username);
    // if (isUserU) return res.status(HttpStatus.CONFLICT).json({'message': 'User already exists'});
    if (isUserU) {
      const user = await this.authService.validateUserCredentials(username, password);
      if (!user) {
        throw new UnauthorizedException('Invalid credentials, user not found');
      }
        const token = await this.authService.loginWithCredentials(user);
        return res.status(HttpStatus.OK).json({
          message: 'Login successful',
          access_token: token,
          user: user
        });
    }

    // Validate user inputs
    const validation = this.userService.validateUserInputs(params, res);
    if(validation === true) {
      const user = await this.userService.create(params);
      if(!user) return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({'message': 'User could not be created'});
      return res.status(HttpStatus.OK).json({'message': 'User created successfully'});
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('secret')
  async getAllUsers() {
    return await this.userService.randomSecret();
  }
}
