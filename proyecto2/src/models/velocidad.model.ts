import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Velocidad extends Entity {
  @property({
    type: 'number',
    id: true,
    required: false,
    generated: true,
  })
  idvelocidad: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  velocidad: number;

  @property({
    type: 'string',
    required: true,
  })
  time: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Velocidad>) {
    super(data);
  }
}

export interface VelocidadRelations {
  // describe navigational properties here
}

export type VelocidadWithRelations = Velocidad & VelocidadRelations;
