import { Service } from 'src/service/entities/service.entity';
export declare class Category {
    id: number;
    title: string;
    service: Service[];
    createdAt: Date;
    updatedAt: Date;
}
