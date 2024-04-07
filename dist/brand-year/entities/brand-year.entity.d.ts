import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { BrandModel } from 'src/brand-model/entities/brand-model.entity';
export declare class BrandYear {
    id: number;
    title: string;
    model: BrandModel;
    engine: BrandEngine[];
    createdat: Date;
    updatedat: Date;
}
