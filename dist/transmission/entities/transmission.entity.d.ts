import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
export declare class Transmission {
    id: number;
    title: string;
    description: string;
    list: string;
    price: number;
    engine: BrandEngine;
    createdat: Date;
    updatedat: Date;
}
