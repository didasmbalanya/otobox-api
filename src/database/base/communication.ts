import {
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ObjectType, Field } from 'type-graphql';
import { Base } from './base';
import User from '../models/user';

@ObjectType()
@Table({
  paranoid: true,
  timestamps: true,
})
export default class CommunicationModel<T> extends Base<T>
  implements ICommunicationModel {
  @Field()
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  content: string;

  @ForeignKey(() => User)
  fromId: string;

  @ForeignKey(() => User)
  toId: string;

  @Field(() => User, { nullable: true })
  @BelongsTo(() => User, 'fromId')
  from: User;

  @Field(() => User, { nullable: true })
  @BelongsTo(() => User, 'toId')
  to: User;
}

export interface ICommunicationModel {
  id: number;
  content: string;
  fromId: string;
  toId: string;
  from: User;
  to: User;
}
