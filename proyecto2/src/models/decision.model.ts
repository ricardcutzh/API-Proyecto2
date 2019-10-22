import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Decision extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  iddecision?: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  decision: number;

  @property({
    type: 'string',
    required: true,
  })
  time?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Decision>) {
    super(data);
  }
}

export interface DecisionRelations {
  // describe navigational properties here
}

export type DecisionWithRelations = Decision & DecisionRelations;
