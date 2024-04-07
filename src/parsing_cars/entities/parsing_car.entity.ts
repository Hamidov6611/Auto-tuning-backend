import { ParsingCarMake } from 'src/parsing_car_makes/entities/parsing_car_make.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('parsing_cars')
export class ParsingCar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column()
  url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => ParsingCarMake, (parsing_make) => parsing_make.parent_id)
  @JoinColumn({ name: 'parsing_make_id' })
  parsing_make_id: ParsingCarMake[];
}
