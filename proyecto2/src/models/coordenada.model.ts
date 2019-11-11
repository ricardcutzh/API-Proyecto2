import {Entity, model, property} from '@loopback/repository';

@model()
export class Coordenada extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idCoordenada?: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  posX: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  posY: number;


  constructor(data?: Partial<Coordenada>) {
    super(data);
  }
}

export interface CoordenadaRelations {
  // describe navigational properties here
}

export type CoordenadaWithRelations = Coordenada & CoordenadaRelations;
