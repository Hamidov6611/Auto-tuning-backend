import { IsOptional } from 'class-validator';
import { AutoModel } from 'src/auto-model/entities/auto-model.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class AutoCatalog {
  @PrimaryGeneratedColumn({ name: 'auto_catalog_id' })
  id: number;

  @Column()
  title: string;

  @Column()
  @IsOptional()
  video: string

  @Column()
  img: string;

  @ManyToOne(() => AutoModel, (model) => model.catalog)
  @JoinColumn({name: "model_id"})
  model: AutoModel

  @Column()
  price: number

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
