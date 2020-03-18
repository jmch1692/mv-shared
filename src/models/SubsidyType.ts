import { IsNotEmpty } from 'class-validator';
import {
    Entity,
    PrimaryGeneratedColumn,
    OneToMany, CreateDateColumn, UpdateDateColumn, Column
} from 'typeorm';
import {Program} from "./Program";

@Entity()
export class SubsidyType {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column({ name: 'name' })
    public name: string;

    @OneToMany(
        type => Program,
        program => program.subsidyTypes
    )
    public programs: Program[];

    @CreateDateColumn({ type: 'timestamptz', name: 'createdAt' })
    public createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', name: 'updatedAt' })
    public updatedAt: Date;

}
