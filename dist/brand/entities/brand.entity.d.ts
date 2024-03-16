import { BrandModel } from 'src/brand-model/entities/brand-model.entity';
import { Catalog } from 'src/catalog/entities/catalog.entity';
export declare class Brand {
    id: number;
    title: string;
    img: string;
    brandModel: BrandModel[];
    catalog: Catalog;
    createdat: Date;
    updatedat: Date;
}
