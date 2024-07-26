import {
  Controller,
  Post,
  Patch,
  Get,
  Body,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskRequest } from '../dto/createTaskRequest.dto';
import { Task } from '../dto/task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  createOneTask(@Body() createTaskRequest: CreateTaskRequest): Promise<Task> {
    try {
      return this.taskService.createOneTask(createTaskRequest);
    } catch (err) {
      throw err;
    }
  }

  @Patch(':id')
  async updateOneTask(
    @Param('id') id: number,
    @Body() updateTaskRequest: Partial<CreateTaskRequest>,
  ): Promise<Task> {
    try {
      //check if task exists before updating
      await this.getOneTaskById(id);
      return this.taskService.updateOneTask(id, updateTaskRequest);
    } catch (err) {
      throw err;
    }
  }

  @Get(':id')
  async getOneTaskById(@Param('id') id: number): Promise<Task> {
    try {
      const taskById = await this.taskService.getOneTaskById(id);
      if (!taskById) {
        throw new NotFoundException(`Task with ${id} not found`);
      }
      return taskById;
    } catch (err) {
      throw err;
    }
  }
}
