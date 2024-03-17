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
const brand_module_1 = require("./brand/brand.module");
const catalog_module_1 = require("./catalog/catalog.module");
const path = require("path");
const throttler_1 = require("@nestjs/throttler");
const core_1 = require("@nestjs/core");
const brand_model_module_1 = require("./brand-model/brand-model.module");
const brand_year_module_1 = require("./brand-year/brand-year.module");
const brand_engine_module_1 = require("./brand-engine/brand-engine.module");
const eco_module_1 = require("./eco/eco.module");
const stage1_module_1 = require("./stage1/stage1.module");
const stage2_module_1 = require("./stage2/stage2.module");
const transmission_module_1 = require("./transmission/transmission.module");
const rc_plus_module_1 = require("./rc-plus/rc-plus.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            throttler_1.ThrottlerModule.forRoot([{
                    ttl: 60,
                    limit: 10,
                }]),
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
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_NAME'),
                    synchronize: false,
                    entities: [__dirname + `/**/*.entity{.js, .ts}`],
                }),
                inject: [config_1.ConfigService],
            }),
            feedback_module_1.FeedbackModule,
            category_module_1.CategoryModule,
            service_module_1.ServiceModule,
            call_module_1.CallModule,
            auto_model_module_1.AutoModelModule,
            auto_catalog_module_1.AutoCatalogModule,
            stock_module_1.StockModule,
            brand_module_1.BrandModule,
            catalog_module_1.CatalogModule,
            brand_model_module_1.BrandModelModule,
            brand_year_module_1.BrandYearModule,
            brand_engine_module_1.BrandEngineModule,
            eco_module_1.EcoModule,
            stage1_module_1.Stage1Module,
            stage2_module_1.Stage2Module,
            transmission_module_1.TransmissionModule,
            rc_plus_module_1.RcPlusModule,
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