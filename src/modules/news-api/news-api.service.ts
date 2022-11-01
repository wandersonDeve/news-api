import { Injectable } from '@nestjs/common';
import { SearchDto } from './dtos/search.dto';
import * as NewsAPI from 'newsapi';

@Injectable()
export class NewsApiService {
  async execute({ search, page }: SearchDto) {
    const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

    const result = await newsapi.v2
      .everything({
        q: search,
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk, techcrunch.com',
        from: '2022-10-01',
        to: '2022-11-01',
        language: 'en',
        sortBy: 'relevancy',
        page,
      })
      .then((response) => {
        return response;
      });

    return result;
  }
}
