import { Table, Column, DataType } from 'sequelize-typescript';
import { ObjectType, Field } from 'type-graphql';
import { Base } from './base';

@ObjectType()
@Table({
  paranoid: true,
  timestamps: true,
})
export class GeneralObject<T> extends Base<T> implements IGeneralObject {
  @Field()
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @Field({ nullable: true })
  @Column({
    type: DataType.STRING,
  })
  description: string;
}

export interface IGeneralObject {
  name: string;
  description: string;
}
