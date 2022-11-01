import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { SearchDto } from './dtos/search.dto';
import { NewsApiService } from './news-api.service';

@Controller('newapi')
export class NewsApiController {
  constructor(private newsApiService: NewsApiService) {}

  @Get()
  async newsApi(@Query() search: SearchDto, @Res() res: Response) {
    const { status, data } = await this.newsApiService.execute(search);

    return res.status(status).send(data);
  }
}
