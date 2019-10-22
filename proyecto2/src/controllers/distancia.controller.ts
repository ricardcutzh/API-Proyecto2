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
import {Distancia} from '../models';
import {DistanciaRepository} from '../repositories';

export class DistanciaController {
  constructor(
    @repository(DistanciaRepository)
    public distanciaRepository : DistanciaRepository,
  ) {}

  @post('/distancias', {
    responses: {
      '200': {
        description: 'Distancia model instance',
        content: {'application/json': {schema: getModelSchemaRef(Distancia)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Distancia, {
            title: 'NewDistancia',
            exclude: ['iddistancia'],
          }),
        },
      },
    })
    distancia: Omit<Distancia, 'iddistancia'>,
  ): Promise<Distancia> {
    return this.distanciaRepository.create(distancia);
  }

  @get('/distancias/count', {
    responses: {
      '200': {
        description: 'Distancia model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Distancia)) where?: Where<Distancia>,
  ): Promise<Count> {
    return this.distanciaRepository.count(where);
  }

  @get('/distancias', {
    responses: {
      '200': {
        description: 'Array of Distancia model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Distancia)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Distancia)) filter?: Filter<Distancia>,
  ): Promise<Distancia[]> {
    return this.distanciaRepository.find(filter);
  }

  @patch('/distancias', {
    responses: {
      '200': {
        description: 'Distancia PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Distancia, {partial: true}),
        },
      },
    })
    distancia: Distancia,
    @param.query.object('where', getWhereSchemaFor(Distancia)) where?: Where<Distancia>,
  ): Promise<Count> {
    return this.distanciaRepository.updateAll(distancia, where);
  }

  @get('/distancias/{id}', {
    responses: {
      '200': {
        description: 'Distancia model instance',
        content: {'application/json': {schema: getModelSchemaRef(Distancia)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Distancia> {
    return this.distanciaRepository.findById(id);
  }

  @patch('/distancias/{id}', {
    responses: {
      '204': {
        description: 'Distancia PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Distancia, {partial: true}),
        },
      },
    })
    distancia: Distancia,
  ): Promise<void> {
    await this.distanciaRepository.updateById(id, distancia);
  }

  @put('/distancias/{id}', {
    responses: {
      '204': {
        description: 'Distancia PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() distancia: Distancia,
  ): Promise<void> {
    await this.distanciaRepository.replaceById(id, distancia);
  }

  @del('/distancias/{id}', {
    responses: {
      '204': {
        description: 'Distancia DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.distanciaRepository.deleteById(id);
  }
}
