import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import { EnrollmentStatus } from './EnrollmentStatus';
import { Slot } from './Slot';
import { Student } from './Student';

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ name: 'startDate' })
  public startDate: Date;

  @Column({ name: 'endDate' })
  public endDate: Date;

  @IsNotEmpty()
  @Column({ name: 'isUnderAge' })
  public isUnderAge: boolean;

  @Column({ name: 'studentId' })
  public studentId: string;

  @ManyToOne(type => Student)
  @JoinColumn()
  public student: Student;

  @OneToOne(type => EnrollmentStatus)
  @JoinColumn()
  public enrollmentStatus: EnrollmentStatus;

  @ManyToOne(
    type => Slot,
    slot => slot.enrollments
  )
  public slot: Slot;

  @CreateDateColumn({ type: 'timestamptz', name: 'createdAt' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updatedAt' })
  public updatedAt: Date;
}
