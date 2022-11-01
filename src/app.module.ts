import { NewsApiModule } from './modules/news-api/news-api.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AxiosProvider } from './shared/providers/axios/axios.provider';

@Module({
  imports: [NewsApiModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [AxiosProvider],
})
export class AppModule {}
