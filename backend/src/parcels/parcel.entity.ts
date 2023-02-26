import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Length } from 'class-validator';

@Entity()
export class Parcel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Length(3)
  sku: string;

  @Column()
  description: string;

  @Column()
  @Length(5)
  streetAddress: string;

  @Column()
  @Length(3)
  town: string;

  @Column()
  @Length(3)
  country: string;

  @Column()
  deliveryDate: Date;

  @Column({
    default: 0,
  })
  order: number;
}
