import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import { Guardian } from './Guardian';
import { Student } from './Student';
import { Educator } from './Educator';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ name: 'city' })
  public city: string;

  @Column({ name: 'state' })
  public state: string;

  @Column({ name: 'zipCode' })
  public zipCode: string;

  @Column({ name: 'address1' })
  public address1: string;

  @Column({ name: 'address2' })
  public address2: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'createdAt' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updatedAt' })
  public updatedAt: Date;

  @OneToMany(
    type => Guardian,
    guardian => guardian.address
  )
  public guardians: Guardian[];

  @OneToMany(
    type => Student,
    student => student.address
  )
  public students: Student[];

  @OneToMany(
    type => Educator,
    educator => educator.address
  )
  public educator: Educator[];
}
