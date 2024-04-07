import { ParsingCarsTuning } from "src/parsing_cars_tunings/entities/parsing_cars_tuning.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("parsing_cars_marks_tunung_statistics")
export class ParsingCarsMarksTunungStatistic {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ParsingCarsTuning, (tuning) => tuning.tuning_statistic_id)
  @JoinColumn({ name: 'parent_id' })
  parent_id: ParsingCarsTuning;


  @Column()
  name: string;

  @Column()
  original: string;

  @Column()
  after_tuning: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
