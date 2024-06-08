import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

type Teste = {
  login: string;
  senha: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/teste")
  teste(@Body() data: any): Promise<any> {
    console.log(data);
    return this.appService.teste(data.senha);
  }
  // async teste1(@Query('text') text: string): Promise<any> {
  //   console.log(text);
  //   return await this.appService.teste(text);
  // }

}
