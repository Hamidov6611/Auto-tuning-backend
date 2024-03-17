import { IsOptional } from 'class-validator';
import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class RcPlus {
  @PrimaryGeneratedColumn({ name: 'rc_plus_id' })
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  @IsOptional()
  hero: string;

  @ManyToOne(() => BrandEngine, (engine) => engine.rc_plus)
  @JoinColumn({ name: 'engine_id' })
  engine: BrandEngine;

  @CreateDateColumn()
  createdat: Date;

  @UpdateDateColumn()
  updatedat: Date;
}
