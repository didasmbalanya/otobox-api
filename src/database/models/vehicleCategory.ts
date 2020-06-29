import { Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { ObjectType, Field } from 'type-graphql';
import Vehicle from './vehicle';
import { Base } from '../base/base';

@ObjectType()
@Table({
  paranoid: true,
  timestamps: true,
})
export default class VehicleCategory extends Base<VehicleCategory>
  implements IVehicleCategory {
  @Field()
  @Column({
    type: DataType.STRING,
  })
  category: string;

  @Field({ nullable: true })
  @Column({
    type: DataType.STRING,
  })
  icon: string;

  @Field(() => [Vehicle], { nullable: true })
  @HasMany(() => Vehicle, 'categoryId')
  vehicles: Vehicle[];
}

interface IVehicleCategory {
  category: string;
  icon: string;
  vehicles: Vehicle[];
}
