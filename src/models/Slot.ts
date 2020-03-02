import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import { Enrollment } from './Enrollment';
import { Program } from './Program';
import { SlotType } from './SlotType';

@Entity()
export class Slot {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @IsNotEmpty()
  @Column({ name: 'dayOfWeek' })
  public dayOfWeek: string;

  @IsNotEmpty()
  @Column({ name: 'monthlyPrice' })
  public monthlyPrice: number;

  @OneToOne(type => SlotType)
  @JoinColumn()
  public slotType: SlotType;

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
