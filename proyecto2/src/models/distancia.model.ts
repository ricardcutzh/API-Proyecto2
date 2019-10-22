import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Distancia extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  iddistancia?: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  distancia: number;

  @property({
    type: 'string',
    required: true,
  })
  time: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Distancia>) {
    super(data);
  }
}

export interface DistanciaRelations {
  // describe navigational properties here
}

export type DistanciaWithRelations = Distancia & DistanciaRelations;
