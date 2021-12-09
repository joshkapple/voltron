import { Injectable } from '@nestjs/common';
import { Message } from '@voltron/api-interfaces';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to myapp!' };
  }
}
