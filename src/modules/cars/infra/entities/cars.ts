import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("cars")
class Cars {

@PrimaryColumn()
id: string;

@Column()
placa: string;

@Column()
modelo: string;

@Column()
marca: string;

@Column()
tamanho: string;

@Column()
cor: string;

@CreateDateColumn()
created_at: Date;

constructor() {
    if(!this.id){
        this.id = uuidv4();
    }
}

}

export { Cars };