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
import { CatalogModule } from './catalog/catalog.module';
import * as path from 'path';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ParsingCarsModule } from './parsing_cars/parsing_cars.module';
import { ParsingCar } from './parsing_cars/entities/parsing_car.entity';
import { Admin } from './admin/entities/admin.entity';
import { AutoCatalog } from './auto-catalog/entities/auto-catalog.entity';
import { AutoModel } from './auto-model/entities/auto-model.entity';
import { Calls } from './call/entities/call.entity';
import { Category } from './category/entities/category.entity';
import { Feedback } from './feedback/entities/feedback.entity';
import { News } from './news/entities/news.entity';
import { Service } from './service/entities/service.entity';
import { Stock } from './stock/entities/stock.entity';
import { Work } from './work/entities/work.entity';
import { ParsingCarMakesModule } from './parsing_car_makes/parsing_car_makes.module';
import { ParsingCarMake } from './parsing_car_makes/entities/parsing_car_make.entity';
import { ParsingCarMakesYearsModule } from './parsing_car_makes_years/parsing_car_makes_years.module';
import { ParsingCarMakesYear } from './parsing_car_makes_years/entities/parsing_car_makes_year.entity';
import { ParsingCarsEnginesModule } from './parsing_cars_engines/parsing_cars_engines.module';
import { ParsingCarsEngine } from './parsing_cars_engines/entities/parsing_cars_engine.entity';
import { ParsingCarsTuningsModule } from './parsing_cars_tunings/parsing_cars_tunings.module';
import { ParsingCarsTuning } from './parsing_cars_tunings/entities/parsing_cars_tuning.entity';
import { ParsingCarsMarksTunungStatisticsModule } from './parsing_cars_marks_tunung_statistics/parsing_cars_marks_tunung_statistics.module';
import { ParsingCarsMarksTunungStatistic } from './parsing_cars_marks_tunung_statistics/entities/parsing_cars_marks_tunung_statistic.entity';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60,
        limit: 10,
      },
    ]),
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
        name: 'mysqlConnection',
        type: 'mysql',
        host: configService.get('DB_HOST1'),
        port: configService.get('DB_PORT1'),
        username: configService.get('DB_USERNAME1'),
        password: configService.get('DB_PASSWORD1'),
        database: configService.get('DB_NAME1'),
        synchronize: false,
        entities: [
          ParsingCar,
          ParsingCarMake,
          ParsingCarMakesYear,
          ParsingCarsEngine,
          ParsingCarsTuning,
          ParsingCarsMarksTunungStatistic,
          Admin,
          AutoCatalog,
          AutoModel,
          Calls,
          Category,
          Feedback,
          News,
          Service,
          Stock,
          Work
        ],
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
    CatalogModule,
    ParsingCarsModule,
    ParsingCarMakesModule,
    ParsingCarMakesYearsModule,
    ParsingCarsEnginesModule,
    ParsingCarsTuningsModule,
    ParsingCarsMarksTunungStatisticsModule,
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
