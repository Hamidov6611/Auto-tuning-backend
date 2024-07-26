import { Work } from "src/work/entities/work.entity";
export declare class Tag {
    id: number;
    name: string;
    works: Work[];
    createdAt: Date;
    updatedAt: Date;
}
