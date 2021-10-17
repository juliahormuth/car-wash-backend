import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

import { v4 as uuidv4 } from "uuid";

@Entity("categories")
class Category {
   @PrimaryColumn()
   id?: string;

   @Column()
   name: String;
   
   @Column()
   description: String;
   
   @CreateDateColumn()
   created_at: Date;

   constructor(){
       if(!this.id){
          this.id = uuidv4();
       }
   }


};


export { Category };