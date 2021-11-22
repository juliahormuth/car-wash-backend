import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity,JoinTable, ManyToOne, PrimaryColumn } from 'typeorm';
import { Customers } from '../../../customers/infra/entities/Customers';
import { Cars } from '../../../cars/infra/entities/Cars';

@Entity("wash")
class Wash {

@PrimaryColumn()
id: string;

@Column()
washType: string;

@Column()
value: number;

@ManyToOne(() => Customers, customers => customers.washes, { eager: true })
@JoinTable()
customer: Customers;

@ManyToOne(() => Cars, cars => cars.washes, { eager: true })
@JoinTable()
car: Cars;

@Column()
start_wash: number;

@Column()
expected_end_wash: number;


@CreateDateColumn()
created_at: number;


constructor() {
    if(!this.id){
        this.id = uuidv4();
    }
}

}

export { Wash };