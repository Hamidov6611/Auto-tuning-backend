import { Tag } from 'src/tag/entities/tag.entity';
export declare class Work {
    id: number;
    title: string;
    description: string;
    img: string;
    tag: Tag;
    createdAt: Date;
    updatedAt: Date;
}
