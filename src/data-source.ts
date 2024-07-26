import { DataSource } from 'typeorm';
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
import { ParsingCarMake } from './parsing_car_makes/entities/parsing_car_make.entity';
import { ParsingCarMakesYear } from './parsing_car_makes_years/entities/parsing_car_makes_year.entity';
import { ParsingCarsEngine } from './parsing_cars_engines/entities/parsing_cars_engine.entity';
import { ParsingCarsTuning } from './parsing_cars_tunings/entities/parsing_cars_tuning.entity';
import { ParsingCarsMarksTunungStatistic } from './parsing_cars_marks_tunung_statistics/entities/parsing_cars_marks_tunung_statistic.entity';
import { Tag } from './tag/entities/tag.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'sufikemmout.beget.app',
  port: 3306,
  username: 'Cars',
  password: 'U&O%Fey345R6',
  database: 'Cars',
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
    Work,
    Tag,
  ],
  migrations: ['dist/migrations/*{.ts,.js}'],
});
