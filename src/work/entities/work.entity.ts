import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Work {
  @PrimaryGeneratedColumn({ name: 'work_id' })
  id: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @Column()
  img: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
