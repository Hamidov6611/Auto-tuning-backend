import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { BrandModel } from 'src/brand-model/entities/brand-model.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class BrandYear {
  @PrimaryGeneratedColumn({ name: 'brand_year_id' })
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => BrandModel, (model) => model.year)
  @JoinColumn({ name: 'model_id' })
  model: BrandModel;

  @OneToMany(() => BrandEngine, (engine) => engine.year)
  @JoinColumn({name: "engine_id"})
  engine: BrandEngine[]

  @CreateDateColumn()
  createdat: Date;

  @UpdateDateColumn()
  updatedat: Date;
}
