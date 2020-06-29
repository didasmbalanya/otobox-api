import { ObjectType } from 'type-graphql';
import { Table } from 'sequelize-typescript';
import CommunicationModel, { ICommunicationModel } from '../base/communication';

@ObjectType()
@Table({
  paranoid: true,
})
export default class Notification extends CommunicationModel<Notification>
  implements ICommunicationModel {}
