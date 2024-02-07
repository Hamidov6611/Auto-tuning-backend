import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Call {
  @PrimaryGeneratedColumn({ name: 'call_id' })
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  date: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
