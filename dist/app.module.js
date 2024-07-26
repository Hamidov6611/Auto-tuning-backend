"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const news_module_1 = require("./news/news.module");
const serve_static_1 = require("@nestjs/serve-static");
const work_module_1 = require("./work/work.module");
const admin_module_1 = require("./admin/admin.module");
const feedback_module_1 = require("./feedback/feedback.module");
const category_module_1 = require("./category/category.module");
const service_module_1 = require("./service/service.module");
const call_module_1 = require("./call/call.module");
const auto_model_module_1 = require("./auto-model/auto-model.module");
const auto_catalog_module_1 = require("./auto-catalog/auto-catalog.module");
const stock_module_1 = require("./stock/stock.module");
const catalog_module_1 = require("./catalog/catalog.module");
const path = require("path");
const throttler_1 = require("@nestjs/throttler");
const core_1 = require("@nestjs/core");
const parsing_cars_module_1 = require("./parsing_cars/parsing_cars.module");
const parsing_car_entity_1 = require("./parsing_cars/entities/parsing_car.entity");
const admin_entity_1 = require("./admin/entities/admin.entity");
const auto_catalog_entity_1 = require("./auto-catalog/entities/auto-catalog.entity");
const auto_model_entity_1 = require("./auto-model/entities/auto-model.entity");
const call_entity_1 = require("./call/entities/call.entity");
const category_entity_1 = require("./category/entities/category.entity");
const feedback_entity_1 = require("./feedback/entities/feedback.entity");
const news_entity_1 = require("./news/entities/news.entity");
const service_entity_1 = require("./service/entities/service.entity");
const stock_entity_1 = require("./stock/entities/stock.entity");
const work_entity_1 = require("./work/entities/work.entity");
const parsing_car_makes_module_1 = require("./parsing_car_makes/parsing_car_makes.module");
const parsing_car_make_entity_1 = require("./parsing_car_makes/entities/parsing_car_make.entity");
const parsing_car_makes_years_module_1 = require("./parsing_car_makes_years/parsing_car_makes_years.module");
const parsing_car_makes_year_entity_1 = require("./parsing_car_makes_years/entities/parsing_car_makes_year.entity");
const parsing_cars_engines_module_1 = require("./parsing_cars_engines/parsing_cars_engines.module");
const parsing_cars_engine_entity_1 = require("./parsing_cars_engines/entities/parsing_cars_engine.entity");
const parsing_cars_tunings_module_1 = require("./parsing_cars_tunings/parsing_cars_tunings.module");
const parsing_cars_tuning_entity_1 = require("./parsing_cars_tunings/entities/parsing_cars_tuning.entity");
const parsing_cars_marks_tunung_statistics_module_1 = require("./parsing_cars_marks_tunung_statistics/parsing_cars_marks_tunung_statistics.module");
const parsing_cars_marks_tunung_statistic_entity_1 = require("./parsing_cars_marks_tunung_statistics/entities/parsing_cars_marks_tunung_statistic.entity");
const tag_entity_1 = require("./tag/entities/tag.entity");
const tag_module_1 = require("./tag/tag.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            throttler_1.ThrottlerModule.forRoot([
                {
                    ttl: 60,
                    limit: 10,
                },
            ]),
            news_module_1.NewsModule,
            work_module_1.WorkModule,
            admin_module_1.AdminModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.join(__dirname, '..', 'uploads'),
            }),
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    name: 'mysqlConnection',
                    type: 'mysql',
                    host: configService.get('DB_HOST1'),
                    port: configService.get('DB_PORT1'),
                    username: configService.get('DB_USERNAME1'),
                    password: configService.get('DB_PASSWORD1'),
                    database: configService.get('DB_NAME1'),
                    synchronize: false,
                    entities: [
                        parsing_car_entity_1.ParsingCar,
                        parsing_car_make_entity_1.ParsingCarMake,
                        parsing_car_makes_year_entity_1.ParsingCarMakesYear,
                        parsing_cars_engine_entity_1.ParsingCarsEngine,
                        parsing_cars_tuning_entity_1.ParsingCarsTuning,
                        parsing_cars_marks_tunung_statistic_entity_1.ParsingCarsMarksTunungStatistic,
                        admin_entity_1.Admin,
                        auto_catalog_entity_1.AutoCatalog,
                        auto_model_entity_1.AutoModel,
                        call_entity_1.Calls,
                        category_entity_1.Category,
                        feedback_entity_1.Feedback,
                        news_entity_1.News,
                        service_entity_1.Service,
                        stock_entity_1.Stock,
                        work_entity_1.Work,
                        tag_entity_1.Tag
                    ],
                }),
                inject: [config_1.ConfigService],
            }),
            tag_module_1.TagModule,
            feedback_module_1.FeedbackModule,
            category_module_1.CategoryModule,
            service_module_1.ServiceModule,
            call_module_1.CallModule,
            auto_model_module_1.AutoModelModule,
            auto_catalog_module_1.AutoCatalogModule,
            stock_module_1.StockModule,
            catalog_module_1.CatalogModule,
            parsing_cars_module_1.ParsingCarsModule,
            parsing_car_makes_module_1.ParsingCarMakesModule,
            parsing_car_makes_years_module_1.ParsingCarMakesYearsModule,
            parsing_cars_engines_module_1.ParsingCarsEnginesModule,
            parsing_cars_tunings_module_1.ParsingCarsTuningsModule,
            parsing_cars_marks_tunung_statistics_module_1.ParsingCarsMarksTunungStatisticsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map