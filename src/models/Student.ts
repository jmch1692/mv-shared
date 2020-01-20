import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import { Address } from './Address';
import { Guardian } from './Guardian';
import { Match } from './Match';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @IsNotEmpty()
  @Column({ name: 'firstName' })
  public firstName: string;

  @IsNotEmpty()
  @Column({ name: 'lastName' })
  public lastName: string;

  @Column({ name: 'addressId' })
  public addressId: string;

  @IsNotEmpty()
  @Column({ name: 'subsidy' })
  public subsidy: boolean;

  @ManyToOne(type => Address)
  @JoinTable()
  public address: Address;

  @OneToMany(
    type => Match,
    match => match.student
  )
  @JoinTable()
  public matches: Match[];

  @IsNotEmpty()
  @Column({ name: 'birthDate' })
  public birthDate: Date;

  @Column({ name: 'specialNeeds' })
  public specialNeeds: string;

  @ManyToMany(
    type => Guardian,
    guardian => guardian.students
  )
  @JoinTable()
  public guardians: Guardian[];

  @Column({ type: 'jsonb', name: 'notes' })
  public notes: object;

  @CreateDateColumn({ type: 'timestamptz', name: 'createdAt' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updatedAt' })
  public updatedAt: Date;

  public fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
