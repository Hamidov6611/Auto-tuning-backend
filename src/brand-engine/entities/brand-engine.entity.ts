import { BrandYear } from 'src/brand-year/entities/brand-year.entity';
import { Eco } from 'src/eco/entities/eco.entity';
import { RcPlus } from 'src/rc-plus/entities/rc-plus.entity';
import { Stage1 } from 'src/stage1/entities/stage1.entity';
import { Stage2 } from 'src/stage2/entities/stage2.entity';
import { Transmission } from 'src/transmission/entities/transmission.entity';
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

@Entity()
export class BrandEngine {
  @PrimaryGeneratedColumn({ name: 'brand_engine_id' })
  id: number;

  @Column()
  title: string;

  @OneToMany(() => Eco, (eco) => eco.engine)
  @JoinColumn({ name: 'eco_id' })
  eco: Eco[];

  @OneToMany(() => Stage1, (stage1) => stage1.engine)
  @JoinColumn({ name: 'stage_one_id' })
  stage_one: Stage1[];

  @OneToMany(() => Stage2, (stage2) => stage2.engine)
  @JoinColumn({ name: 'stage_two_id' })
  stage_two: Stage2[];

  @OneToMany(() => Transmission, (transmission) => transmission.engine)
  @JoinColumn({name: "transmission_id"})
  transmission: Transmission[]

  @OneToMany(() => RcPlus, (rc) => rc.engine)
  @JoinColumn({name: "engine_id"})
  rc_plus: RcPlus[]

  @ManyToOne(() => BrandYear, (year) => year.engine)
  @JoinColumn({ name: 'year_id' })
  year: BrandYear;

  @CreateDateColumn()
  createdat: Date;

  @UpdateDateColumn()
  updatedat: Date;
}
