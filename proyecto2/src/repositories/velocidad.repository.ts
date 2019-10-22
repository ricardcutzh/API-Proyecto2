import {DefaultCrudRepository} from '@loopback/repository';
import {Velocidad, VelocidadRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VelocidadRepository extends DefaultCrudRepository<
  Velocidad,
  typeof Velocidad.prototype.idvelocidad,
  VelocidadRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Velocidad, dataSource);
  }
}
