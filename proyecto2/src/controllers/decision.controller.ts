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
import {Decision} from '../models';
import {DecisionRepository} from '../repositories';

export class DecisionController {
  constructor(
    @repository(DecisionRepository)
    public decisionRepository : DecisionRepository,
  ) {}

  @post('/decisions', {
    responses: {
      '200': {
        description: 'Decision model instance',
        content: {'application/json': {schema: getModelSchemaRef(Decision)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Decision, {
            title: 'NewDecision',
            exclude: ['iddecision'],
          }),
        },
      },
    })
    decision: Omit<Decision, 'iddecision'>,
  ): Promise<Decision> {
    return this.decisionRepository.create(decision);
  }

  @get('/decisions/count', {
    responses: {
      '200': {
        description: 'Decision model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Decision)) where?: Where<Decision>,
  ): Promise<Count> {
    return this.decisionRepository.count(where);
  }

  @get('/decisions', {
    responses: {
      '200': {
        description: 'Array of Decision model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Decision)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Decision)) filter?: Filter<Decision>,
  ): Promise<Decision[]> {
    return this.decisionRepository.find(filter);
  }

  @patch('/decisions', {
    responses: {
      '200': {
        description: 'Decision PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Decision, {partial: true}),
        },
      },
    })
    decision: Decision,
    @param.query.object('where', getWhereSchemaFor(Decision)) where?: Where<Decision>,
  ): Promise<Count> {
    return this.decisionRepository.updateAll(decision, where);
  }

  @get('/decisions/{id}', {
    responses: {
      '200': {
        description: 'Decision model instance',
        content: {'application/json': {schema: getModelSchemaRef(Decision)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Decision> {
    return this.decisionRepository.findById(id);
  }

  @patch('/decisions/{id}', {
    responses: {
      '204': {
        description: 'Decision PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Decision, {partial: true}),
        },
      },
    })
    decision: Decision,
  ): Promise<void> {
    await this.decisionRepository.updateById(id, decision);
  }

  @put('/decisions/{id}', {
    responses: {
      '204': {
        description: 'Decision PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() decision: Decision,
  ): Promise<void> {
    await this.decisionRepository.replaceById(id, decision);
  }

  @del('/decisions/{id}', {
    responses: {
      '204': {
        description: 'Decision DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.decisionRepository.deleteById(id);
  }
}
