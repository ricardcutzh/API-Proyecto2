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
import {Objeto} from '../models';
import {ObjetoRepository} from '../repositories';

export class ObjetoController {
  constructor(
    @repository(ObjetoRepository)
    public objetoRepository : ObjetoRepository,
  ) {}

  @post('/objetos', {
    responses: {
      '200': {
        description: 'Objeto model instance',
        content: {'application/json': {schema: getModelSchemaRef(Objeto)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Objeto, {
            title: 'NewObjeto',
            exclude: ['idobjeto'],
          }),
        },
      },
    })
    objeto: Omit<Objeto, 'idobjeto'>,
  ): Promise<Objeto> {
    return this.objetoRepository.create(objeto);
  }

  @get('/objetos/count', {
    responses: {
      '200': {
        description: 'Objeto model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Objeto)) where?: Where<Objeto>,
  ): Promise<Count> {
    return this.objetoRepository.count(where);
  }

  @get('/objetos', {
    responses: {
      '200': {
        description: 'Array of Objeto model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Objeto)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Objeto)) filter?: Filter<Objeto>,
  ): Promise<Objeto[]> {
    return this.objetoRepository.find(filter);
  }

  @patch('/objetos', {
    responses: {
      '200': {
        description: 'Objeto PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Objeto, {partial: true}),
        },
      },
    })
    objeto: Objeto,
    @param.query.object('where', getWhereSchemaFor(Objeto)) where?: Where<Objeto>,
  ): Promise<Count> {
    return this.objetoRepository.updateAll(objeto, where);
  }

  @get('/objetos/{id}', {
    responses: {
      '200': {
        description: 'Objeto model instance',
        content: {'application/json': {schema: getModelSchemaRef(Objeto)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Objeto> {
    return this.objetoRepository.findById(id);
  }

  @patch('/objetos/{id}', {
    responses: {
      '204': {
        description: 'Objeto PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Objeto, {partial: true}),
        },
      },
    })
    objeto: Objeto,
  ): Promise<void> {
    await this.objetoRepository.updateById(id, objeto);
  }

  @put('/objetos/{id}', {
    responses: {
      '204': {
        description: 'Objeto PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() objeto: Objeto,
  ): Promise<void> {
    await this.objetoRepository.replaceById(id, objeto);
  }

  @del('/objetos/{id}', {
    responses: {
      '204': {
        description: 'Objeto DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.objetoRepository.deleteById(id);
  }
}
