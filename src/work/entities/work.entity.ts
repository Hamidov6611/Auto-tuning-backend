import { Tag } from 'src/tag/entities/tag.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Work')
export class Work {
  @PrimaryGeneratedColumn({ name: 'work_id' })
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  img: string;

  @ManyToOne(() => Tag, (tag) => tag.works)
  @JoinColumn({ name: 'tagId' })
  tag: Tag;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
