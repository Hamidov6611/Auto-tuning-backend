import { Catalog } from 'src/catalog/entities/catalog.entity';
export declare class Brand {
    id: number;
    title: string;
    img: string;
    catalog: Catalog;
    createdat: Date;
    updatedat: Date;
}
