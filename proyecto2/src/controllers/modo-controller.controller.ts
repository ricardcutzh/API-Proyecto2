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
import {Modo} from '../models';
import {ModoRepository} from '../repositories';

export class ModoControllerController {
  constructor(
    @repository(ModoRepository)
    public modoRepository : ModoRepository,
  ) {}

  @post('/modos', {
    responses: {
      '200': {
        description: 'Modo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Modo)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Modo, {
            title: 'NewModo',
            exclude: ['idmodo'],
          }),
        },
      },
    })
    modo: Omit<Modo, 'idmodo'>,
  ): Promise<Modo> {
    return this.modoRepository.create(modo);
  }

  @get('/modos/count', {
    responses: {
      '200': {
        description: 'Modo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Modo)) where?: Where<Modo>,
  ): Promise<Count> {
    return this.modoRepository.count(where);
  }

  @get('/modos', {
    responses: {
      '200': {
        description: 'Array of Modo model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Modo)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Modo)) filter?: Filter<Modo>,
  ): Promise<Modo[]> {
    return this.modoRepository.find(filter);
  }

  @patch('/modos', {
    responses: {
      '200': {
        description: 'Modo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Modo, {partial: true}),
        },
      },
    })
    modo: Modo,
    @param.query.object('where', getWhereSchemaFor(Modo)) where?: Where<Modo>,
  ): Promise<Count> {
    return this.modoRepository.updateAll(modo, where);
  }

  @get('/modos/{id}', {
    responses: {
      '200': {
        description: 'Modo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Modo)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Modo> {
    return this.modoRepository.findById(id);
  }

  @patch('/modos/{id}', {
    responses: {
      '204': {
        description: 'Modo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Modo, {partial: true}),
        },
      },
    })
    modo: Modo,
  ): Promise<void> {
    await this.modoRepository.updateById(id, modo);
  }

  @put('/modos/{id}', {
    responses: {
      '204': {
        description: 'Modo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() modo: Modo,
  ): Promise<void> {
    await this.modoRepository.replaceById(id, modo);
  }

  @del('/modos/{id}', {
    responses: {
      '204': {
        description: 'Modo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.modoRepository.deleteById(id);
  }
}
