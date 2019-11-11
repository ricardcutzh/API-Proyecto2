import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Coordenada} from '../models';
import {CoordenadaRepository} from '../repositories';

export class CoordenadaController {
  constructor(
    @repository(CoordenadaRepository)
    public coordenadaRepository : CoordenadaRepository,
  ) {}

  @post('/coordenadas', {
    responses: {
      '200': {
        description: 'Coordenada model instance',
        content: {'application/json': {schema: getModelSchemaRef(Coordenada)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Coordenada, {
            title: 'NewCoordenada',
            exclude: ['idCoordenada'],
          }),
        },
      },
    })
    coordenada: Omit<Coordenada, 'idCoordenada'>,
  ): Promise<Coordenada> {
    return this.coordenadaRepository.create(coordenada);
  }

  @get('/coordenadas/count', {
    responses: {
      '200': {
        description: 'Coordenada model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Coordenada)) where?: Where<Coordenada>,
  ): Promise<Count> {
    return this.coordenadaRepository.count(where);
  }

  @get('/coordenadas', {
    responses: {
      '200': {
        description: 'Array of Coordenada model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Coordenada)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Coordenada)) filter?: Filter<Coordenada>,
  ): Promise<Coordenada[]> {
    return this.coordenadaRepository.find(filter);
  }

  @patch('/coordenadas', {
    responses: {
      '200': {
        description: 'Coordenada PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Coordenada, {partial: true}),
        },
      },
    })
    coordenada: Coordenada,
    @param.query.object('where', getWhereSchemaFor(Coordenada)) where?: Where<Coordenada>,
  ): Promise<Count> {
    return this.coordenadaRepository.updateAll(coordenada, where);
  }

  @get('/coordenadas/{id}', {
    responses: {
      '200': {
        description: 'Coordenada model instance',
        content: {'application/json': {schema: getModelSchemaRef(Coordenada)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Coordenada> {
    return this.coordenadaRepository.findById(id);
  }

  @patch('/coordenadas/{id}', {
    responses: {
      '204': {
        description: 'Coordenada PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Coordenada, {partial: true}),
        },
      },
    })
    coordenada: Coordenada,
  ): Promise<void> {
    await this.coordenadaRepository.updateById(id, coordenada);
  }

  @put('/coordenadas/{id}', {
    responses: {
      '204': {
        description: 'Coordenada PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() coordenada: Coordenada,
  ): Promise<void> {
    await this.coordenadaRepository.replaceById(id, coordenada);
  }

  @del('/coordenadas/{id}', {
    responses: {
      '204': {
        description: 'Coordenada DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.coordenadaRepository.deleteById(id);
  }
}
