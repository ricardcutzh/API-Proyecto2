import {DefaultCrudRepository} from '@loopback/repository';
import {Log, LogRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LogRepository extends DefaultCrudRepository<
  Log,
  typeof Log.prototype.idlog,
  LogRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Log, dataSource);
  }
}
