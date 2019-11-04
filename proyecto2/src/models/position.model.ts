import {Entity, model, property} from '@loopback/repository';

@model()
export class Position extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idposition?: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  xpos: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  ypos: number;


  constructor(data?: Partial<Position>) {
    super(data);
  }
}

export interface PositionRelations {
  // describe navigational properties here
}

export type PositionWithRelations = Position & PositionRelations;
