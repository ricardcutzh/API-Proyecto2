import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Objeto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idobjeto?: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  objeto: number;

  @property({
    type: 'string',
    required: true,
  })
  time: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Objeto>) {
    super(data);
  }
}

export interface ObjetoRelations {
  // describe navigational properties here
}

export type ObjetoWithRelations = Objeto & ObjetoRelations;
