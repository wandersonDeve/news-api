import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchDto } from './dtos/search.dto';
import { NewsApiService } from './news-api.service';

@ApiTags('News Api')
@Controller('newsapi')
export class NewsApiController {
  constructor(private newsApiService: NewsApiService) {}

  @Get()
  @ApiOperation({
    summary: 'Busca todas as noticias referente a solicitação',
  })
  async newsApi(@Query() search: SearchDto) {
    return this.newsApiService.execute(search);
  }
}
