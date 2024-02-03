import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class News {
  @PrimaryGeneratedColumn({ name: 'news_id' })
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
