import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("customers")
class Customers {

@PrimaryColumn()
id: string;

@Column()
name: string;

@Column()
document: string;

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

export { Customers };