import { NewsApiService } from './news-api.service';
import { NewsApiController } from './news-api.controller';

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [NewsApiController],
  providers: [NewsApiService],
})
export class NewsApiModule {}
