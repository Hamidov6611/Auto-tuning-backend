import { AutoModel } from 'src/auto-model/entities/auto-model.entity';
export declare class AutoCatalog {
    id: number;
    title: string;
    video: string;
    img: string;
    model: AutoModel;
    price: number;
    createdat: Date;
    updatedat: Date;
}
