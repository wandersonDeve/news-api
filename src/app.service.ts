import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Documentação em http://localhost:${window.location.origin}/api`;
  }
}
