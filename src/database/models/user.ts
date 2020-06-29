import {
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { ObjectType, Field } from 'type-graphql';
import Role from './role';
import { BaseUUID } from '../base/base';
import Message from './message';
import Notification from './notification';

@ObjectType()
@Table({
  paranoid: true,
})
export default class User extends BaseUUID<User> implements IUser {
  @Field({ nullable: true })
  @Column({
    type: DataType.STRING,
  })
  firstname: string;

  @Field({ nullable: true })
  @Column({
    type: DataType.STRING,
  })
  lastname: string;

  @Field()
  @Column({
    allowNull: false,
    unique: true,
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.STRING,
  })
  password: string;

  @Field({ nullable: true })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  phoneNumber: string;

  @Field({ nullable: true })
  @Column({
    type: DataType.STRING,
  })
  phoneNumberTwo: string;

  @Field({ nullable: true })
  @Column({
    type: DataType.STRING,
  })
  profileImage: string;

  @Field({ nullable: true })
  @Column({
    type: DataType.TEXT,
  })
  about: string;

  @Column({
    defaultValue: 1,
  })
  tokenVersion: number;

  @ForeignKey(() => Role)
  roleId: number;

  @Field(() => Role)
  @BelongsTo(() => Role, 'roleId')
  role: Role;

  @Field(() => [Message], { nullable: true })
  @HasMany(() => Message)
  messages: Message[];

  @Field(() => [Notification], { nullable: true })
  @HasMany(() => Notification)
  notifications: Notification[];
}

export interface IUser {
  id: string;
  firstname?: string;
  lastname?: string;
  email: string;
  password?: string;
  profileImage?: string;
  roleId: number;
  tokenVersion?: number;
  role?: Role;
  about: string;
  phoneNumber: string;
  phoneNumberTwo: string;
  messages: Message[];
  notifications: Notification[];
}
