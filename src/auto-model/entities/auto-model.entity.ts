import { AutoCatalog } from 'src/auto-catalog/entities/auto-catalog.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class AutoModel {
  @PrimaryGeneratedColumn({ name: 'auto_model_id' })
  id: number;

  @Column()
  title: string;
  @Column()
  img: string;

  @OneToMany(() => AutoCatalog, (catalog) => catalog.model)
  @JoinColumn({name: "catalog_id"})
  catalog: AutoCatalog[]

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
