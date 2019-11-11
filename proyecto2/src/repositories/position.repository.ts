import {DefaultCrudRepository} from '@loopback/repository';
import {Position, PositionRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PositionRepository extends DefaultCrudRepository<
  Position,
  typeof Position.prototype.idposition,
  PositionRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Position, dataSource);
  }
}
