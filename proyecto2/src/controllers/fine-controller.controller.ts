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
import {Fine} from '../models';
import {FineRepository} from '../repositories';

export class FineControllerController {
  constructor(
    @repository(FineRepository)
    public fineRepository : FineRepository,
  ) {}

  @post('/fines', {
    responses: {
      '200': {
        description: 'Fine model instance',
        content: {'application/json': {schema: getModelSchemaRef(Fine)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fine, {
            title: 'NewFine',
            exclude: ['idfine'],
          }),
        },
      },
    })
    fine: Omit<Fine, 'idfine'>,
  ): Promise<Fine> {
    return this.fineRepository.create(fine);
  }

  @get('/fines/count', {
    responses: {
      '200': {
        description: 'Fine model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Fine)) where?: Where<Fine>,
  ): Promise<Count> {
    return this.fineRepository.count(where);
  }

  @get('/fines', {
    responses: {
      '200': {
        description: 'Array of Fine model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Fine)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Fine)) filter?: Filter<Fine>,
  ): Promise<Fine[]> {
    return this.fineRepository.find(filter);
  }

  @patch('/fines', {
    responses: {
      '200': {
        description: 'Fine PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fine, {partial: true}),
        },
      },
    })
    fine: Fine,
    @param.query.object('where', getWhereSchemaFor(Fine)) where?: Where<Fine>,
  ): Promise<Count> {
    return this.fineRepository.updateAll(fine, where);
  }

  @get('/fines/{id}', {
    responses: {
      '200': {
        description: 'Fine model instance',
        content: {'application/json': {schema: getModelSchemaRef(Fine)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Fine> {
    return this.fineRepository.findById(id);
  }

  @patch('/fines/{id}', {
    responses: {
      '204': {
        description: 'Fine PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fine, {partial: true}),
        },
      },
    })
    fine: Fine,
  ): Promise<void> {
    await this.fineRepository.updateById(id, fine);
  }

  @put('/fines/{id}', {
    responses: {
      '204': {
        description: 'Fine PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() fine: Fine,
  ): Promise<void> {
    await this.fineRepository.replaceById(id, fine);
  }

  @del('/fines/{id}', {
    responses: {
      '204': {
        description: 'Fine DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.fineRepository.deleteById(id);
  }
}
