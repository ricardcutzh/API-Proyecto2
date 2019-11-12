import {DefaultCrudRepository} from '@loopback/repository';
import {Modo, ModoRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ModoRepository extends DefaultCrudRepository<
  Modo,
  typeof Modo.prototype.idmodo,
  ModoRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Modo, dataSource);
  }
}
