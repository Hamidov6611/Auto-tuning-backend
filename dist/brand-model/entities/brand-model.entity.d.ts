import { BrandYear } from 'src/brand-year/entities/brand-year.entity';
import { Brand } from 'src/brand/entities/brand.entity';
export declare class BrandModel {
    id: number;
    title: string;
    brand: Brand;
    year: BrandYear[];
    createdat: Date;
    updatedat: Date;
}
