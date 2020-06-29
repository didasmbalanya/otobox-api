import { Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { ObjectType, Field } from 'type-graphql';
import { Base } from '../base/base';
import Vehicle from './vehicle';

@ObjectType()
@Table({
  paranoid: true,
  timestamps: true,
})
export default class VehicleMake extends Base<VehicleMake>
  implements IVehicleMake {
  @Field()
  @Column({
    type: DataType.STRING,
  })
  make: string;

  @Field({ nullable: true })
  @Column({
    type: DataType.STRING,
  })
  logo: string;

  @Field(() => [Vehicle], { nullable: true })
  @HasMany(() => Vehicle, 'makeId')
  vehicles: Vehicle[];
}

interface IVehicleMake {
  make: string;
  logo: string;
  vehicles: Vehicle[];
}
