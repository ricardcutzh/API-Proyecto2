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
import {Viaje} from '../models';
import {ViajeRepository} from '../repositories';

export class ViajeController {
  constructor(
    @repository(ViajeRepository)
    public viajeRepository : ViajeRepository,
  ) {}

  @post('/viajes', {
    responses: {
      '200': {
        description: 'Viaje model instance',
        content: {'application/json': {schema: getModelSchemaRef(Viaje)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Viaje, {
            title: 'NewViaje',
            exclude: ['idviaje'],
          }),
        },
      },
    })
    viaje: Omit<Viaje, 'idviaje'>,
  ): Promise<Viaje> {
    return this.viajeRepository.create(viaje);
  }

  @get('/viajes/count', {
    responses: {
      '200': {
        description: 'Viaje model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Viaje)) where?: Where<Viaje>,
  ): Promise<Count> {
    return this.viajeRepository.count(where);
  }

  @get('/viajes', {
    responses: {
      '200': {
        description: 'Array of Viaje model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Viaje)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Viaje)) filter?: Filter<Viaje>,
  ): Promise<Viaje[]> {
    return this.viajeRepository.find(filter);
  }

  @patch('/viajes', {
    responses: {
      '200': {
        description: 'Viaje PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Viaje, {partial: true}),
        },
      },
    })
    viaje: Viaje,
    @param.query.object('where', getWhereSchemaFor(Viaje)) where?: Where<Viaje>,
  ): Promise<Count> {
    return this.viajeRepository.updateAll(viaje, where);
  }

  @get('/viajes/{id}', {
    responses: {
      '200': {
        description: 'Viaje model instance',
        content: {'application/json': {schema: getModelSchemaRef(Viaje)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Viaje> {
    return this.viajeRepository.findById(id);
  }

  @patch('/viajes/{id}', {
    responses: {
      '204': {
        description: 'Viaje PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Viaje, {partial: true}),
        },
      },
    })
    viaje: Viaje,
  ): Promise<void> {
    await this.viajeRepository.updateById(id, viaje);
  }

  @put('/viajes/{id}', {
    responses: {
      '204': {
        description: 'Viaje PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() viaje: Viaje,
  ): Promise<void> {
    await this.viajeRepository.replaceById(id, viaje);
  }

  @del('/viajes/{id}', {
    responses: {
      '204': {
        description: 'Viaje DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.viajeRepository.deleteById(id);
  }
}
