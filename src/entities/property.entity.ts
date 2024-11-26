import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PropertyFeatures } from './propertyFeatures.entity';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: 0 })
  price: number;

  @OneToOne(
    () => PropertyFeatures,
    (propertyFeatures) => propertyFeatures.property,
    { cascade: true },
  )
  propertyFeatures: PropertyFeatures;
}
