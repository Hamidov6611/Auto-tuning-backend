import { AutoCatalog } from 'src/auto-catalog/entities/auto-catalog.entity';
export declare class AutoModel {
    id: number;
    title: string;
    img: string;
    catalog: AutoCatalog[];
    createdat: Date;
    updatedat: Date;
}
