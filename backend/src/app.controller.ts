import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('yasuri')
  async yasuri(@Query('uri') uri, @Query('json') json): Promise<string> {
    // http://localhost:3001/yasuri?uri=https://www.ruby-lang.org/en/&json={%22text_title%22:%20%22/html/head/title%22,%20%22text_desc%22:%20%22//*[@id=\%27intro\%27]/p%22%20}
    // const uri = 'https://www.ruby-lang.org/en/';
    // const json =
    //   '{"text_title": "/html/head/title", "text_desc": "//*[@id=\'intro\']/p" }';

    const c = await this.appService.runYasuri(uri, json);
    return JSON.stringify(c);
  }
}
