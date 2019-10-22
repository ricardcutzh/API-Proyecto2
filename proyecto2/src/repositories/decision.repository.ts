import {DefaultCrudRepository} from '@loopback/repository';
import {Decision, DecisionRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DecisionRepository extends DefaultCrudRepository<
  Decision,
  typeof Decision.prototype.iddecision,
  DecisionRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Decision, dataSource);
  }
}
