import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import {IsEmail, IsNotEmpty} from 'class-validator'

@Entity({name: "users"})
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    @IsNotEmpty({ message: "Username should not be empty" })
    username: string
}
