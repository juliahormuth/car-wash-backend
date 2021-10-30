import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("employees")
class Employees {

@PrimaryColumn()
id: string;

@Column()
name: string;

@Column()
document: string;

@Column()
email: string;

@Column()
password: string;

@Column()
address: string;

@Column()
phoneNumber: string;

@CreateDateColumn()
created_at: Date;

constructor() {
    if(!this.id){
        this.id = uuidv4();
    }
}

}

export { Employees };