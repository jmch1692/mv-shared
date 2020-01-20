import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';

import { Match } from './Match';

@Entity()
export class MatchStatus {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @IsNotEmpty()
  @Column({ name: 'name' })
  public name: string;

  @OneToMany(
    type => Match,
    match => match.status
  )
  public matches: Match[];

  @CreateDateColumn({ type: 'timestamptz', name: 'createdAt' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updatedAt' })
  public updatedAt: Date;
}
