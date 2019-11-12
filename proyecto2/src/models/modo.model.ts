import {Entity, model, property} from '@loopback/repository';

@model()
export class Modo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idmodo?: number;

  @property({
    type: 'string',
    required: true,
  })
  modo: string;


  constructor(data?: Partial<Modo>) {
    super(data);
  }
}

export interface ModoRelations {
  // describe navigational properties here
}

export type ModoWithRelations = Modo & ModoRelations;
