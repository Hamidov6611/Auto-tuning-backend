import { ParsingCarMakesYear } from 'src/parsing_car_makes_years/entities/parsing_car_makes_year.entity';
import { ParsingCar } from 'src/parsing_cars/entities/parsing_car.entity';
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

@Entity('parsing_car_makes')
export class ParsingCarMake {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ParsingCar, (parsing_car) => parsing_car.parsing_make_id)
  @JoinColumn({ name: 'parent_id' })
  parent_id: ParsingCar;

  @Column()
  name: string;

  @Column()
  url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => ParsingCarMakesYear, (parsing_car_makes_years) => parsing_car_makes_years.parent_id)
  @JoinColumn({ name: 'parsing_car_makes_years_id' })
  parsing_car_makes_years_id: ParsingCarMakesYear[];
}
