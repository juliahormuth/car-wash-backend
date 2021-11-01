import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("cars")
class Cars {

@PrimaryColumn()
id: string;

@Column()
board: string;

@Column()
model: string;

@Column()
brand: string;

@Column()
size: string;

@Column()
color: string;

@CreateDateColumn({nullable: true})
created_at: Date;

constructor() {
    if(!this.id){
        this.id = uuidv4();
    }
}

}

export { Cars };