import { Brand } from 'src/brand/entities/brand.entity';
export declare class Catalog {
    id: number;
    title: string;
    img: string;
    brand: Brand[];
    createdat: Date;
    updatedat: Date;
}
