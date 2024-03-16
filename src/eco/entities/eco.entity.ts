import { IsNumber, IsOptional, IsString } from 'class-validator';
import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Eco {
  @PrimaryGeneratedColumn({ name: 'eco_id' })
  id: number;

  @Column({ default: 'ECO' })
  @IsOptional()
  title: string;

  @ManyToOne(() => BrandEngine, (engine) => engine.eco)
  @JoinColumn({ name: 'engine_id' })
  engine: BrandEngine;

  @Column()
  @IsNumber()
  original_nm: number;

  @Column()
  @IsNumber()
  after_nm: number;

  @Column()
  @IsNumber()
  percentage: number

  @Column()
  @IsNumber()
  price: number

  @Column()
  @IsString()
  @IsOptional()
  description: string
  

  @CreateDateColumn()
  createdat: Date;

  @UpdateDateColumn()
  updatedat: Date;
}
