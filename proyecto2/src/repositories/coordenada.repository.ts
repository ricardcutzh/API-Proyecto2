import {DefaultCrudRepository} from '@loopback/repository';
import {Coordenada, CoordenadaRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CoordenadaRepository extends DefaultCrudRepository<
  Coordenada,
  typeof Coordenada.prototype.idCoordenada,
  CoordenadaRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Coordenada, dataSource);
  }
}
