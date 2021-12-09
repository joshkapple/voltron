import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import {ServeStaticModule} from "@nestjs/serve-static";
import { join } from "path";
import { FooController } from './foo/foo.controller';

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
  controllers: [AppController, FooController],
  providers: [AppService],
})
export class AppModule {}
