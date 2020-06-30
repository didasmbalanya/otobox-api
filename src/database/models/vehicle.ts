import {
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { ObjectType, Field, Int } from 'type-graphql';
import User from './user';
import { GeneralObject } from '../base/generalObject';
import VehicleMake from './vehicleMake';
import VehicleCategory from './vehicleCategory';

@ObjectType()
@Table({
  paranoid: true,
  timestamps: true,
})
export default class Vehicle extends GeneralObject<Vehicle>
  implements IVehicle {
  @Field()
  @Column({
    type: DataType.STRING,
  })
  model: string;

  @Field({ nullable: true })
  @Column({
    type: DataType.STRING,
  })
  logo: string;

  @Field({ nullable: true })
  @Column({
    type: DataType.STRING,
  })
  imageUrl: string;

  @Field(() => Int, { nullable: true })
  @Column({
    type: DataType.INTEGER,
  })
  year: number;

  @Field(() => Int, { nullable: true })
  @Column({
    type: DataType.STRING,
  })
  mileage: number;

  @Field(() => Int, { nullable: true })
  @Column({
    type: DataType.INTEGER,
  })
  sellingPrice: number;

  @Field(() => Int, { nullable: true })
  @Column({
    type: DataType.INTEGER,
  })
  rentingPrice: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  ownerId: string;

  @ForeignKey(() => VehicleMake)
  makeId: number;

  @ForeignKey(() => VehicleCategory)
  categoryId: number;

  @Field(() => User)
  @BelongsTo(() => User, 'ownerId')
  owner: User;

  @Field(() => VehicleMake)
  @BelongsTo(() => VehicleMake, 'makeId')
  make: VehicleMake;

  @Field(() => VehicleCategory)
  @BelongsTo(() => VehicleCategory, 'categoryId')
  category: VehicleCategory;
}

export interface IVehicle {
  id: number;
  name: string;
  description: string;
  logo: string;
  imageUrl: string;
  model: string;
  makeId: number;
  categoryId: number;
  ownerId: string;
  owner: User;
  year: number;
  sellingPrice: number;
  rentingPrice: number;
  mileage: number;
}
