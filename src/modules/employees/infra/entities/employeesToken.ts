import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { Employees } from "./employees";
import { v4 as uuidv4 } from "uuid";

@Entity("tokens")
class Token {
    
@PrimaryColumn()
id: string;

@Column()
refresh_token: string;

@Column()
employees_id: string;

@ManyToOne(() => Employees)
@JoinColumn({name: "employees_id"})
employee: Employees

@Column()
expires_date: Date;

@CreateDateColumn()
created_at: Date;

constructor(){
    if(!this.id){
        this.id = uuidv4();
    }
}
}

export { Token }