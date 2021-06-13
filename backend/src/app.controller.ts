import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/yasuri')
  async yasuri(): Promise<string> {
    const uri = 'https://www.ruby-lang.org/en/';
    const json =
      '{"text_title": "/html/head/title", "text_desc": "//*[@id=\'intro\']/p" }';
    const c = await this.appService.runYasuri(uri, json);
    return JSON.stringify(c);
  }
}
