import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Cars } from '../../../cars/infra/entities/Cars'
import { Customers } from '../../../customers/infra/entities/Customers'
import { Wash } from '../../../wash/infra/entities/Wash'


@Entity("services")
class Services {

@PrimaryColumn()
id: string;

@ManyToOne(() => Customers)
@JoinColumn({ name: "customer_id" })
customer: Customers;

@Column()
customer_id: string;

@ManyToOne(() => Cars)
@JoinColumn({ name: "car_id" })
car: Cars;

@Column()
car_id: string;


@ManyToOne(() => Wash)
@JoinColumn({ name: "wash_id" })
wash: Wash;

@Column()
wash_id: string;

@Column()
value: number;

@Column()
start_wash: Date;

@Column()
expected_end_wash: Date;

@CreateDateColumn()
created_at: Date;

constructor() {
    if(!this.id){
        this.id = uuidv4();
    }
}

}

export { Services };
