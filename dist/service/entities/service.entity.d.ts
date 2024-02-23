import { Category } from 'src/category/entities/category.entity';
export declare class Service {
    id: number;
    title: string;
    category: Category;
    img: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}
