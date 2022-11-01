import { Injectable } from '@nestjs/common';
import { AxiosProvider } from '../../shared/providers/axios/axios.provider';
import { SearchDto } from './dtos/search.dto';

@Injectable()
export class NewsApiService {
  constructor(private axiosProvider: AxiosProvider) {}
  async execute(search: SearchDto) {
    const options = {
      method: 'get',
      url: `${process.env.NEWS_API_URL}${search}${process.env.NEWS_API_KEY}`,
    };

    const { data, status } = await this.axiosProvider.execute(options);

    return {
      status,
      data,
    };
  }
}
