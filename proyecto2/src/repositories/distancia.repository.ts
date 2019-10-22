import {DefaultCrudRepository} from '@loopback/repository';
import {Distancia, DistanciaRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DistanciaRepository extends DefaultCrudRepository<
  Distancia,
  typeof Distancia.prototype.iddistancia,
  DistanciaRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Distancia, dataSource);
  }
}
