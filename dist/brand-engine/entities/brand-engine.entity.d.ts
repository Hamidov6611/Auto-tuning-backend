import { BrandYear } from 'src/brand-year/entities/brand-year.entity';
import { Eco } from 'src/eco/entities/eco.entity';
import { RcPlus } from 'src/rc-plus/entities/rc-plus.entity';
import { Stage1 } from 'src/stage1/entities/stage1.entity';
import { Stage2 } from 'src/stage2/entities/stage2.entity';
import { Transmission } from 'src/transmission/entities/transmission.entity';
export declare class BrandEngine {
    id: number;
    name: string;
    type_engine: string;
    engine_hp: string;
    eco: Eco[];
    stage_one: Stage1[];
    stage_two: Stage2[];
    transmission: Transmission[];
    rc_plus: RcPlus[];
    year: BrandYear;
    createdat: Date;
    updatedat: Date;
}
