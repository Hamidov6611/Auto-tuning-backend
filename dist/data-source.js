"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
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
const parsing_car_make_entity_1 = require("./parsing_car_makes/entities/parsing_car_make.entity");
const parsing_car_makes_year_entity_1 = require("./parsing_car_makes_years/entities/parsing_car_makes_year.entity");
const parsing_cars_engine_entity_1 = require("./parsing_cars_engines/entities/parsing_cars_engine.entity");
const parsing_cars_tuning_entity_1 = require("./parsing_cars_tunings/entities/parsing_cars_tuning.entity");
const parsing_cars_marks_tunung_statistic_entity_1 = require("./parsing_cars_marks_tunung_statistics/entities/parsing_cars_marks_tunung_statistic.entity");
const tag_entity_1 = require("./tag/entities/tag.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'sufikemmout.beget.app',
    port: 3306,
    username: 'Cars',
    password: 'U&O%Fey345R6',
    database: 'Cars',
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
        tag_entity_1.Tag,
    ],
    migrations: ['dist/migrations/*{.ts,.js}'],
});
//# sourceMappingURL=data-source.js.map