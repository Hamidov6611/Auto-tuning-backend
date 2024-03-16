import { BrandModel } from 'src/brand-model/entities/brand-model.entity';
import { Catalog } from 'src/catalog/entities/catalog.entity';
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
export class Brand {
  @PrimaryGeneratedColumn({ name: 'brand_id' })
  id: number;

  @Column()
  title: string;

  @Column()
  img: string;

  
  @OneToMany(() => BrandModel, (brandModel) => brandModel.brand)
  @JoinColumn({name: "brand_model_id"})
  brandModel: BrandModel[]

  @ManyToOne(() => Catalog, (catalog) => catalog.brand)
  @JoinColumn({ name: 'catalog_id' })
  catalog: Catalog;

  

  @CreateDateColumn()
  createdat: Date;

  @UpdateDateColumn()
  updatedat: Date;
}
