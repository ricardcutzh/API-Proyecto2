import {Entity, model, property} from '@loopback/repository';

@model()
export class Fine extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idfine?: number;

  @property({
    type: 'string',
    required: true,
  })
  fine: string;


  constructor(data?: Partial<Fine>) {
    super(data);
  }
}

export interface FineRelations {
  // describe navigational properties here
}

export type FineWithRelations = Fine & FineRelations;
