import {DefaultCrudRepository} from '@loopback/repository';
import {Color, ColorRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ColorRepository extends DefaultCrudRepository<
  Color,
  typeof Color.prototype.idcolor,
  ColorRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Color, dataSource);
  }
}
