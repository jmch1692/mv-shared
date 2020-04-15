import { IsNotEmpty } from "class-validator";
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
  AfterLoad,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

import { Address } from "./Address";
import { Program } from "./Program";

@Entity()
export class Educator {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @IsNotEmpty()
  @Column({ name: "firstName" })
  public firstName: string;

  @IsNotEmpty()
  @Column({ name: "lastName" })
  public lastName: string;

  @Column({ name: "addressId" })
  public addressId: string;

  @Column({ name: "externalId" })
  public externalId: string;

  @ManyToOne(type => Address)
  @JoinTable()
  public address: Address;

  @ManyToMany(
    type => Program,
    program => program.educators
  )
  @JoinTable()
  public programs: Program[];

  @Column({ name: "email" })
  public email: string;

  @Column({ name: "phoneNumber" })
  public phoneNumber: string;

  /* Custom fields */
  public fullname: string;

  @CreateDateColumn({ type: "timestamptz", name: "createdAt" })
  public createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz", name: "updatedAt" })
  public updatedAt: Date;

  @AfterLoad()
  public fillCustomFields(): void {
    this.fullname = `${this.firstName} ${this.lastName}`;
  }
}
