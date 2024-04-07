import { ParsingCarMakesYear } from 'src/parsing_car_makes_years/entities/parsing_car_makes_year.entity';
import { ParsingCarsTuning } from 'src/parsing_cars_tunings/entities/parsing_cars_tuning.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('parsing_cars_engines')
export class ParsingCarsEngine {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ParsingCarMakesYear, (parsing_car_makes_years) => parsing_car_makes_years.parsing_engine_id)
  @JoinColumn({ name: 'parent_id' })
  parent_id: ParsingCarMakesYear;

  @Column()
  name: string;

  @Column()
  type_engine: string;

  @Column()
  engine_hp: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => ParsingCarsTuning, (tuning) => tuning.parent_id)
  @JoinColumn({name: "tuning_id"})
  tuning_id: ParsingCarsTuning[]
}
