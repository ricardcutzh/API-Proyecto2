import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Viaje extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idviaje?: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  viaje: number;

  @property({
    type: 'string',
    required: true,
  })
  time: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Viaje>) {
    super(data);
  }
}

export interface ViajeRelations {
  // describe navigational properties here
}

export type ViajeWithRelations = Viaje & ViajeRelations;
