import { NewsApiService } from './news-api.service';
import { NewsApiController } from './news-api.controller';

import { Module } from '@nestjs/common';
import { AxiosProvider } from 'src/shared/providers/axios/axios.provider';

@Module({
  imports: [],
  controllers: [NewsApiController],
  providers: [NewsApiService, AxiosProvider],
})
export class NewsApiModule {}
