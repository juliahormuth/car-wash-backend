import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("wash")
class Wash {

@PrimaryColumn()
id: string;

@Column()
washType: string;

@Column()
value: number;

@CreateDateColumn()
created_at: Date;

constructor() {
    if(!this.id){
        this.id = uuidv4();
    }
}

}

export { Wash };