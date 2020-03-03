import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import { Enrollment } from './Enrollment';
import { Program } from './Program';

@Entity()
export class Slot {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @IsNotEmpty()
  @Column({ name: 'dayOfWeek' })
  public dayOfWeek: string;

  @IsNotEmpty()
  @Column({ name: 'title' })
  public title: string;

  @IsNotEmpty()
  @Column({ type: 'jsonb', name: 'availableSchedule' })
  public availableSchedule: object;

  @IsNotEmpty()
  @Column({ name: 'monthlyPrice' })
  public monthlyPrice: number;

  @ManyToOne(
    type => Program,
    program => program.slots
  )
  @JoinTable()
  public program: Program;

  @OneToMany(
    type => Enrollment,
    enrollment => enrollment.slot
  )
  public enrollments: Enrollment[];

  @CreateDateColumn({ type: 'timestamptz', name: 'createdAt' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updatedAt' })
  public updatedAt: Date;
}
