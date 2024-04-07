import { ParsingCarsEngine } from 'src/parsing_cars_engines/entities/parsing_cars_engine.entity';
import { ParsingCarsMarksTunungStatistic } from 'src/parsing_cars_marks_tunung_statistics/entities/parsing_cars_marks_tunung_statistic.entity';
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

@Entity('parsing_cars_tunings')
export class ParsingCarsTuning {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => ParsingCarsEngine,
    (parsing_car_engine) => parsing_car_engine.tuning_id,
  )
  @JoinColumn({ name: 'parent_id' })
  parent_id: ParsingCarsEngine;

  @Column()
  name: string;

  @Column()
  url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    () => ParsingCarsMarksTunungStatistic,
    (statistic) => statistic.parent_id,
  )
  @JoinColumn({ name: 'tuning_id' })
  tuning_statistic_id: ParsingCarsMarksTunungStatistic[];
}
