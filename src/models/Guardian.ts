import { IsNotEmpty } from "class-validator";
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinTable,
  AfterLoad,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

import { Address } from "./Address";
import { Student } from "./Student";

import moment from "moment";

@Entity()
export class Guardian {
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

  @ManyToOne(type => Address)
  @JoinTable()
  public address: Address;

  @Column({ name: "email" })
  public email: string;

  @Column({ name: "phoneNumber" })
  public phoneNumber: string;

  @IsNotEmpty()
  @Column({ name: "isPrimary" })
  public isPrimary: boolean;

  @Column({ name: "externalId" })
  public externalId: string;

  @ManyToMany(
    type => Student,
    student => student.guardians
  )
  @JoinTable()
  public students: Student[];

  /* Custom fields */
  public fullname: string;
  public siblingNames: string;
  public overAgeTwo: number;
  public underAgeTwo: number;

  @CreateDateColumn({ type: "timestamptz", name: "createdAt" })
  public createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz", name: "updatedAt" })
  public updatedAt: Date;

  @AfterLoad()
  public fillCustomFields(): void {
    let overTwo = 0;
    let underTwo = 0;
    this.fullname = `${this.firstName} ${this.lastName}`;
    this.siblingNames = this.students
      ? this.students
          .map(student => {
            overTwo =
              moment().diff(
                moment(student.birthDate, "MM-DD-YYYY"),
                "months",
                true
              ) >= 24
                ? overTwo + 1
                : overTwo;
            underTwo =
              moment().diff(
                moment(student.birthDate, "MM-DD-YYYY"),
                "months",
                true
              ) < 24
                ? underTwo + 1
                : underTwo;
            return " " + student.firstName;
          })
          .join()
          .trim()
      : undefined;
    this.overAgeTwo = overTwo;
    this.underAgeTwo = underTwo;
  }
}
