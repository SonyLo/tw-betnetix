import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FonbetModule } from './fonbet/fonbet.module';
import { FetchModule } from './fetch/fetch.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    FonbetModule, FetchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
