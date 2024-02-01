import { Category } from 'src/category/entities/category.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn({ name: 'service_id' })
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Category, (transaction) => transaction.service)
  @JoinColumn({name: "category_id"})
  category: Category

  @Column()
  img: string

  // @Column()
  // @IsOptional()
  // desc: string

  @Column()
  price: number

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
