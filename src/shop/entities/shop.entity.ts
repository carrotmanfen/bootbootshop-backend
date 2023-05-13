import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shop {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    description: string;
  
    @Column()
    quantity:number;

    @Column()
    cost:number;

    @Column()
    size:number;

    @Column()
    color:string;
    
}

