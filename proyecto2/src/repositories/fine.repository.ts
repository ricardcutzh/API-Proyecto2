import {DefaultCrudRepository} from '@loopback/repository';
import {Fine, FineRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FineRepository extends DefaultCrudRepository<
  Fine,
  typeof Fine.prototype.idfine,
  FineRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Fine, dataSource);
  }
}
