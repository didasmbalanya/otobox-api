import { Table, ForeignKey, BelongsTo, Column, DataType } from 'sequelize-typescript';
import { ObjectType, Field } from 'type-graphql';
import { BaseUUID } from '../base/base';
import User from './user';
import Vehicle from './vehicle';

@ObjectType()
@Table({
  paranoid: true,
  timestamps: true,
})
export default class Advert extends BaseUUID<Advert> implements IAdvert {
  @ForeignKey(() => Vehicle)
  vehicleId: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  ownerId: string;

  @Field(() => User)
  @BelongsTo(() => User, 'ownerId')
  owner: User;

  @Field(() => Vehicle)
  @BelongsTo(() => Vehicle, 'vehicleId')
  vehicle: Vehicle;
}

interface IAdvert {
  id: string;
  vehicleId: number;
  ownerId: string;
  vehicle: Vehicle;
  owner: User;
}
