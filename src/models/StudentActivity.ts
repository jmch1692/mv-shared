import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import { Student } from './Student';
import { StudentActivityType } from './StudentActivityType';
import { StudentActivityInterface } from '..';

@Entity()
export class StudentActivity implements StudentActivityInterface {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ name: 'startDate' })
  public startDate: string;

  @Column({ name: 'endDate' })
  public endDate: string;

  @Column({ name: 'notes' })
  public notes: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'createdAt' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updatedAt' })
  public updatedAt: Date;

  @Column({ name: 'studentActivityTypeId' })
  public studentActivityTypeId: string;

  @ManyToOne(type => StudentActivityType)
  @JoinTable()
  public studentActivityType: StudentActivityType;

  @Column({ name: 'studentId' })
  public studentId: string;

  @ManyToOne(type => Student)
  @JoinTable()
  public student: Student;
}
