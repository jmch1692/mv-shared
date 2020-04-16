import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity()
export class StudentActivityType {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ name: "name" })
  public name: string;

  @Column({ name: "isActive" })
  public isActive: boolean;

  @CreateDateColumn({ type: "timestamptz", name: "createdAt" })
  public createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz", name: "updatedAt" })
  public updatedAt: Date;
}
