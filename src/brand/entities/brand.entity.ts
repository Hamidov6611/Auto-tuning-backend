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

  @ManyToOne(() => Catalog, (catalog) => catalog.brand)
  @JoinColumn({ name: 'catalog_id' })
  catalog: Catalog;

  @CreateDateColumn()
  createdat: Date;

  @UpdateDateColumn()
  updatedat: Date;
}
