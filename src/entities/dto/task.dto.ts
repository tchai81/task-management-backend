import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('task')
export class Task {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  priority: number;

  @Column({ name: 'end_date' })
  endDate: Date;

  @Column()
  status: number;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
