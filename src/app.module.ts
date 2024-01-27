import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsModule } from './news/news.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { WorkModule } from './work/work.module';
import { AdminModule } from './admin/admin.module';
// import { AuthModule } from './auth/auth.module';
import { FeedbackModule } from './feedback/feedback.module';
import * as path from 'path';

@Module({
  imports: [
    NewsModule,
    WorkModule,
    AdminModule,
    // AuthModule,
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'uploads'),
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        synchronize: true,
        entities: [__dirname + `/**/*.entity{.js, .ts}`],
      }),
      inject: [ConfigService],
    }),
    FeedbackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
