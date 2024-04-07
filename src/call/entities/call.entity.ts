import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('calls')
export class Calls {
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
