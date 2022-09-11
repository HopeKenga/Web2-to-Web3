import { AuthService } from '@interview/auth';
import { UserService } from '@interview/user';
import { Body, Controller, Get, HttpStatus, Post, Response, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DAuthService } from './d-auth.service';

@Controller('v1')
export class DAuthController {
  constructor(
    private dAuthService: DAuthService,
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('signin')
  async signin(@Body() params:any, @Response() res) {
    const isValid = await this.dAuthService.signin(params);
    // return isValid;
    if(isValid === true) {
      const token = await this.authService.loginWithCredentials(params.username);
      return res.status(HttpStatus.OK).json({
        message: 'Login successful',
        access_token: token,
        user: params.username
      });
    } else {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        statusCode: HttpStatus.UNAUTHORIZED,
        message: 'Invalid signature'
      });
    }
  }

  @Post('signin-task3')
  async signinTask3(@Body() params:any, @Response() res) {
    const isValid = await this.dAuthService.signinTask3(params);
    // return isValid;
    if(isValid === true) {
      const token = await this.authService.loginWithCredentials(params.username);
      return res.status(HttpStatus.OK).json({
        message: 'Login successful',
        access_token: token,
        user: params.username
      });
    } else {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        statusCode: HttpStatus.UNAUTHORIZED,
        message: 'Invalid signature'
      });
    }
  }
//get a challenge code generated after every 3 minutes of randomly generated string. If the string is not used within 3 minutes it can be used,
// if 3 minutes have exceeded then you issue a new challenge code
  @UseGuards(AuthGuard('jwt'))
  @Get('secret')
  async getAllUsers() {
    return await this.userService.randomSecret();
  }
}
