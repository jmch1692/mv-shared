import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity({ name: 'slot_type' })
export class SlotType {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @IsNotEmpty()
  @Column({ name: 'title' })
  public title: string;

  @IsNotEmpty()
  @Column({ type: 'jsonb', name: 'availableSchedule' })
  public availableSchedule: object;

  @CreateDateColumn({ type: 'timestamptz', name: 'createdAt' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updatedAt' })
  public updatedAt: Date;
}
