import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './api/api.controller';
import { ConfigModule } from '@nestjs/config';
import {ServeStaticModule} from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.${process.env.NODE_ENV}.env`],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../apps', 'frontend'),
      exclude: ['api*']
    })
  ],
  controllers: [AppController, ApiController],
  providers: [AppService],
})
export class AppModule {}
