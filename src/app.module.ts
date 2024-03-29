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
import { CategoryModule } from './category/category.module';
import { ServiceModule } from './service/service.module';
import { CallModule } from './call/call.module';
import { AutoModelModule } from './auto-model/auto-model.module';
import { AutoCatalogModule } from './auto-catalog/auto-catalog.module';
import { StockModule } from './stock/stock.module';
import { BrandModule } from './brand/brand.module';
import { CatalogModule } from './catalog/catalog.module';
import * as path from 'path';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { BrandModelModule } from './brand-model/brand-model.module';
import { BrandYearModule } from './brand-year/brand-year.module';
import { BrandEngineModule } from './brand-engine/brand-engine.module';
import { EcoModule } from './eco/eco.module';
import { Stage1Module } from './stage1/stage1.module';
import { Stage2Module } from './stage2/stage2.module';
import { TransmissionModule } from './transmission/transmission.module';
import { RcPlusModule } from './rc-plus/rc-plus.module';

@Module({
  imports: [
    ThrottlerModule.forRoot([{
      ttl: 60,
      limit: 10,
    }]),   
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
        synchronize: false,
        entities: [__dirname + `/**/*.entity{.js, .ts}`],
      }),
      inject: [ConfigService],
    }),
    FeedbackModule,
    CategoryModule,
    ServiceModule,
    CallModule,
    AutoModelModule,
    AutoCatalogModule,
    StockModule,
    BrandModule,
    CatalogModule,
    BrandModelModule,
    BrandYearModule,
    BrandEngineModule,
    EcoModule,
    Stage1Module,
    Stage2Module,
    TransmissionModule,
    RcPlusModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
