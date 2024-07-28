import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../dto/task.dto';
import { Repository } from 'typeorm';
import { CreateTaskRequest } from '../dto/createTaskRequest.dto';
import { GetTasksRequestFilter } from '../dto/getTasksRequestFilter.dto';
import { GetTaskResponse } from '../dto/getTasksResponse.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private repo: Repository<Task>,
  ) {}

  async createOneTask(createTaskRequest: CreateTaskRequest): Promise<Task> {
    return await this.repo.save(createTaskRequest);
  }

  async updateOneTask(
    id: number,
    updateTaskRequest: Partial<CreateTaskRequest>,
  ): Promise<Task> {
    return await this.repo.save({ id, ...updateTaskRequest });
  }

  async getOneTaskById(id: number): Promise<Task> {
    return await this.repo.findOne({ where: { id } });
  }

  async getTasks(
    getTasksRequestFilter: GetTasksRequestFilter,
  ): Promise<GetTaskResponse> {
    const pageNumber: number = +getTasksRequestFilter.page;
    const pageSize: number = +getTasksRequestFilter.pageSize;

    return await this.repo.findAndCount({
      order: {
        id: 'DESC',
      },
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
    });
  }
}
