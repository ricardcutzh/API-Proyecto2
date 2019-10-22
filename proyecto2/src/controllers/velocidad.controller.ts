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
import {Velocidad} from '../models';
import {VelocidadRepository} from '../repositories';

export class VelocidadController {
  constructor(
    @repository(VelocidadRepository)
    public velocidadRepository : VelocidadRepository,
  ) {}

  @post('/velocidads', {
    responses: {
      '200': {
        description: 'Velocidad model instance',
        content: {'application/json': {schema: getModelSchemaRef(Velocidad)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Velocidad, {
            title: 'NewVelocidad',
            exclude: ['idvelocidad'],
          }),
        },
      },
    })
    velocidad: Omit<Velocidad, 'idvelocidad'>,
  ): Promise<Velocidad> {
    return this.velocidadRepository.create(velocidad);
  }

  @get('/velocidads/count', {
    responses: {
      '200': {
        description: 'Velocidad model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Velocidad)) where?: Where<Velocidad>,
  ): Promise<Count> {
    return this.velocidadRepository.count(where);
  }

  @get('/velocidads', {
    responses: {
      '200': {
        description: 'Array of Velocidad model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Velocidad)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Velocidad)) filter?: Filter<Velocidad>,
  ): Promise<Velocidad[]> {
    return this.velocidadRepository.find(filter);
  }

  @patch('/velocidads', {
    responses: {
      '200': {
        description: 'Velocidad PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Velocidad, {partial: true}),
        },
      },
    })
    velocidad: Velocidad,
    @param.query.object('where', getWhereSchemaFor(Velocidad)) where?: Where<Velocidad>,
  ): Promise<Count> {
    return this.velocidadRepository.updateAll(velocidad, where);
  }

  @get('/velocidads/{id}', {
    responses: {
      '200': {
        description: 'Velocidad model instance',
        content: {'application/json': {schema: getModelSchemaRef(Velocidad)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Velocidad> {
    return this.velocidadRepository.findById(id);
  }

  @patch('/velocidads/{id}', {
    responses: {
      '204': {
        description: 'Velocidad PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Velocidad, {partial: true}),
        },
      },
    })
    velocidad: Velocidad,
  ): Promise<void> {
    await this.velocidadRepository.updateById(id, velocidad);
  }

  @put('/velocidads/{id}', {
    responses: {
      '204': {
        description: 'Velocidad PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() velocidad: Velocidad,
  ): Promise<void> {
    await this.velocidadRepository.replaceById(id, velocidad);
  }

  @del('/velocidads/{id}', {
    responses: {
      '204': {
        description: 'Velocidad DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.velocidadRepository.deleteById(id);
  }
}
