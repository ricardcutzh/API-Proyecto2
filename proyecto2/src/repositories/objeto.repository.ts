import {DefaultCrudRepository} from '@loopback/repository';
import {Objeto, ObjetoRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ObjetoRepository extends DefaultCrudRepository<
  Objeto,
  typeof Objeto.prototype.idobjeto,
  ObjetoRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Objeto, dataSource);
  }
}
