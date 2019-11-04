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
import {Position} from '../models';
import {PositionRepository} from '../repositories';

export class PositionController {
  constructor(
    @repository(PositionRepository)
    public positionRepository : PositionRepository,
  ) {}

  @post('/positions', {
    responses: {
      '200': {
        description: 'Position model instance',
        content: {'application/json': {schema: getModelSchemaRef(Position)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Position, {
            title: 'NewPosition',
            exclude: ['idposition'],
          }),
        },
      },
    })
    position: Omit<Position, 'idposition'>,
  ): Promise<Position> {
    return this.positionRepository.create(position);
  }

  @get('/positions/count', {
    responses: {
      '200': {
        description: 'Position model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Position)) where?: Where<Position>,
  ): Promise<Count> {
    return this.positionRepository.count(where);
  }

  @get('/positions', {
    responses: {
      '200': {
        description: 'Array of Position model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Position)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Position)) filter?: Filter<Position>,
  ): Promise<Position[]> {
    return this.positionRepository.find(filter);
  }

  @patch('/positions', {
    responses: {
      '200': {
        description: 'Position PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Position, {partial: true}),
        },
      },
    })
    position: Position,
    @param.query.object('where', getWhereSchemaFor(Position)) where?: Where<Position>,
  ): Promise<Count> {
    return this.positionRepository.updateAll(position, where);
  }

  @get('/positions/{id}', {
    responses: {
      '200': {
        description: 'Position model instance',
        content: {'application/json': {schema: getModelSchemaRef(Position)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Position> {
    return this.positionRepository.findById(id);
  }

  @patch('/positions/{id}', {
    responses: {
      '204': {
        description: 'Position PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Position, {partial: true}),
        },
      },
    })
    position: Position,
  ): Promise<void> {
    await this.positionRepository.updateById(id, position);
  }

  @put('/positions/{id}', {
    responses: {
      '204': {
        description: 'Position PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() position: Position,
  ): Promise<void> {
    await this.positionRepository.replaceById(id, position);
  }

  @del('/positions/{id}', {
    responses: {
      '204': {
        description: 'Position DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.positionRepository.deleteById(id);
  }
}
