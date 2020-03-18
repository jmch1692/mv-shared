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

import { AddressDistance } from '..';
import { SlotAvailability } from '..';
import { Time } from '..';
import { Address } from './Address';
import { Educator } from './Educator';
import { License } from './License';
import { Slot } from './Slot';
import { Match } from './Match';
import { SubsidyType } from './SubsidyType';
import { OpeningState } from './OpeningState';

@Entity()
export class Program {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @IsNotEmpty()
  @Column({ name: 'name' })
  public name: string;

  @IsNotEmpty()
  @Column({ name: 'website' })
  public website: string;

  @IsNotEmpty()
  @Column({ name: 'acceptSubsidies' })
  public acceptSubsidies: boolean;

  @Column({ name: 'externalId' })
  public externalId: string;

  @Column({ name: 'tourLink' })
  public tourLink: string;

  @IsNotEmpty()
  @Column({ name: 'addressId' })
  public addressId: string;

  @OneToMany(
    type => Slot,
    slot => slot.program
  )
  @JoinTable()
  public slots: Slot[];

  @OneToMany(
    type => Match,
    match => match.program
  )
  @JoinTable()
  public matches: Match[];

  @ManyToOne(type => Address)
  @JoinTable()
  public address: Address;

  @ManyToMany(
    type => Educator,
    educator => educator.programs
  )
  @JoinTable()
  public educators: Educator[];

  @IsNotEmpty()
  @Column({ name: 'startDate' })
  public startDate: Date;

  @ManyToMany(
    type => License,
    license => license.programs
  )
  @JoinTable()
  public licenses: License[];

  @ManyToMany(
      type => SubsidyType,
      subsidyType => subsidyType.programs
  )
  @JoinTable()
  public subsidyTypes: SubsidyType[];

  @IsNotEmpty()
  @Column({ name: 'openingStateId' })
  public openingStateId: string;

  @ManyToOne(type => OpeningState)
  @JoinTable()
  public openingState: OpeningState;

  @CreateDateColumn({ type: 'timestamptz', name: 'createdAt' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updatedAt' })
  public updatedAt: Date;

  /* Custom fields */
  public addressDistance: AddressDistance;
  public slotsAvailability: SlotAvailability;
  public opens: Time;
}
