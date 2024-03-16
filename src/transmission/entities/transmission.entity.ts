import { IsOptional } from 'class-validator';
import { BrandEngine } from 'src/brand-engine/entities/brand-engine.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Transmission {
  @PrimaryGeneratedColumn({ name: 'transmission_id' })
  id: number;

  @Column({ default: 'Transmission' })
  @IsOptional()
  title: string;

  @Column()
  description: string

  @Column()
  list: string

  @Column()
  price: number

  @ManyToOne(() => BrandEngine, (engine) => engine.transmission)
  @JoinColumn({ name: 'engine_id' })
  engine: BrandEngine;

  @CreateDateColumn()
  createdat: Date;

  @UpdateDateColumn()
  updatedat: Date;
}
