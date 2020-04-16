import { IsNotEmpty } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column
} from "typeorm";

@Entity()
export class OpeningState {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @IsNotEmpty()
  @Column({ name: "name" })
  public name: string;

  @CreateDateColumn({ type: "timestamptz", name: "createdAt" })
  public createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz", name: "updatedAt" })
  public updatedAt: Date;
}
