import {DefaultCrudRepository} from '@loopback/repository';
import {Viaje, ViajeRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ViajeRepository extends DefaultCrudRepository<
  Viaje,
  typeof Viaje.prototype.idviaje,
  ViajeRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Viaje, dataSource);
  }
}
