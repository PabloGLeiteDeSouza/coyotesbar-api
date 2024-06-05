import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

type Teste = {
  text: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/teste")
  async teste(@Body() data: Teste): Promise<any> {
    console.log(data);
    return await this.appService.teste(data.text);
  }
  // async teste1(@Query('text') text: string): Promise<any> {
  //   console.log(text);
  //   return await this.appService.teste(text);
  // }

}
