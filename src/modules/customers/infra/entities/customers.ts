import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn, OneToMany} from 'typeorm';
import { Wash } from '../../../wash/infra/entities/Wash';

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

@OneToMany(() => Wash, wash => wash.customer)
washes: Wash[];

@CreateDateColumn()
created_at: Date;

constructor() {
    if(!this.id){
        this.id = uuidv4();
    }
}

}

export { Customers };