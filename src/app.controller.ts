import { Body, Controller, Get, Param, Post, Query, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

type Teste = {
  login: string;
  senha: string;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any){
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }


  @Post("/teste")
  teste(@Body() data: any): Promise<any> {
    return this.appService.teste(data);
  }
  // async teste1(@Query('text') text: string): Promise<any> {
  //   console.log(text);
  //   return await this.appService.teste(text);
  // }

}
