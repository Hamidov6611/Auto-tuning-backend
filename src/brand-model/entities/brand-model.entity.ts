import { BrandYear } from 'src/brand-year/entities/brand-year.entity';
import { Brand } from 'src/brand/entities/brand.entity';
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
export class BrandModel {
  @PrimaryGeneratedColumn({ name: 'brand_model_id' })
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Brand, (brand) => brand.brandModel)
  @JoinColumn({ name: 'brand_id' })
  brand: Brand;

  @OneToMany(() => BrandYear, (year) => year.model)
  @JoinColumn({name: 'brand_year_id'})
  year: BrandYear[]

  @CreateDateColumn()
  createdat: Date;

  @UpdateDateColumn()
  updatedat: Date;
}
