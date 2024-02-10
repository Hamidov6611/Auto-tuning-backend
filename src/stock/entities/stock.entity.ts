import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Stock {
    @PrimaryGeneratedColumn({ name: 'stock_id' })
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    description:string;
  
    @Column()
    img: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date; 
}
