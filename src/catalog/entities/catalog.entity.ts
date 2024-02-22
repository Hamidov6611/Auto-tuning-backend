import { Brand } from 'src/brand/entities/brand.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Catalog {
  @PrimaryGeneratedColumn({ name: 'catalog_id' })
  id: number;

  @Column()
  title: string;

  @Column()
  img: string

  @OneToMany(() => Brand, (brand) => brand.catalog)
  @JoinColumn({name: "brand_id"})
  brand: Brand[]

  @CreateDateColumn()
  createdat: Date;

  @UpdateDateColumn()
  updatedat: Date;
}
