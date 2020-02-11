import { IsNotEmpty } from 'class-validator';
import {
    Entity,
    PrimaryGeneratedColumn,
    OneToMany, CreateDateColumn, UpdateDateColumn, Column
} from 'typeorm';
import { Match } from './Match';

@Entity()
export class PreferredStartWindow {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column({ name: 'name' })
    public name: string;

    @IsNotEmpty()
    @Column({ name: 'startWindow' })
    public startWindow: string;

    @OneToMany(
        type => Match,
        match => match.startWindow
    )
    public matches: Match[];

    @CreateDateColumn({ type: 'timestamptz', name: 'createdAt' })
    public createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', name: 'updatedAt' })
    public updatedAt: Date;

}
