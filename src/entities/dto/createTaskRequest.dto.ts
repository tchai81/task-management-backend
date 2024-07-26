import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateTaskRequest {
  @IsNotEmpty()
  title: string;

  description: string;

  @IsNotEmpty()
  @IsNumber()
  priority: number;

  endDate: Date;

  @IsNotEmpty()
  @IsNumber()
  status: number;

  @IsOptional()
  createdAt: Date = new Date();

  @IsOptional()
  updatedAt: Date = new Date();
}
