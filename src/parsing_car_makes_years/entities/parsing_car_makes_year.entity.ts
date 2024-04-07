import { ParsingCarMake } from 'src/parsing_car_makes/entities/parsing_car_make.entity';
import { ParsingCarsEngine } from 'src/parsing_cars_engines/entities/parsing_cars_engine.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('parsing_car_makes_years')
export class ParsingCarMakesYear {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ParsingCarMake, (parsing_car_makes) => parsing_car_makes.parsing_car_makes_years_id)
  @JoinColumn({ name: 'parent_id' })
  parent_id: ParsingCarMake;

  @Column()
  years: string;

  @Column()
  url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => ParsingCarsEngine, (parsing_cars_engine) => parsing_cars_engine.parent_id)
  @JoinColumn({name: 'parsing_engine_id'})
  parsing_engine_id: ParsingCarsEngine[]
}
