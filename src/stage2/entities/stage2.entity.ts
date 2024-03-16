import { IsOptional } from 'class-validator';
import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Stage2 {
  @PrimaryGeneratedColumn({ name: 'stage_two_id' })
  id: number;

  @Column({ default: 'Stage 2' })
  @IsOptional()
  title: string;

  @Column()
  original_nm: number

  @Column()
  after_nm: number

  @Column()
  original_hp: number

  @Column()
  after_hp: number

  @Column()
  price: number

  @Column()
  @IsOptional()
  description: string

  @Column()
  @IsOptional()
  exception: string

  @ManyToOne(() => BrandEngine, (engine) => engine.stage_two)
  @JoinColumn({ name: 'engine_id' })
  engine: BrandEngine;

  @CreateDateColumn()
  createdat: Date;

  @UpdateDateColumn()
  updatedat: Date;
}
