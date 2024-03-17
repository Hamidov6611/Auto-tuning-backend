import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
export declare class Stage2 {
    id: number;
    title: string;
    original_nm: number;
    after_nm: number;
    original_hp: number;
    after_hp: number;
    price: number;
    description: string;
    exception: string;
    engine: BrandEngine;
    createdat: Date;
    updatedat: Date;
}
