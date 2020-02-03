import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import { MatchStatus } from './MatchStatus';
import { Program } from './Program';
import { Student } from './Student';

@Entity()
export class Match {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'jsonb', name: 'careNeeds' })
  public careNeeds: object[];

  @IsNotEmpty()
  @Column({ name: 'statusId' })
  public statusId: string;

  @ManyToOne(() => MatchStatus)
  @JoinTable()
  public status: MatchStatus;

  @Column({ name: 'startDate' })
  public startDate: Date;

  @Column({ type: 'jsonb', name: 'notes' })
  public notes: object;

  @Column({ type: 'jsonb', name: 'tasks' })
  public tasks: object;

  @IsNotEmpty()
  @Column({ name: 'studentId' })
  public studentId: string;

  @ManyToOne(
    () => Student,
    student => student.matches
  )
  @JoinTable()
  public student: Student;

  @Column({ name: 'programId' })
  public programId: string;

  @ManyToOne(
    () => Program,
    program => program.matches
  )
  @JoinTable()
  public program: Program;

  @CreateDateColumn({ type: 'timestamptz', name: 'createdAt' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updatedAt' })
  public updatedAt: Date;
}
