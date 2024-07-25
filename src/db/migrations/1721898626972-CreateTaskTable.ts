import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTaskTable1721898626972 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'task',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'description',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'priority',
            type: 'integer',
          },
          {
            name: 'date',
            type: 'DATE',
          },
          {
            name: 'status',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'created_at',
            type: 'DATETIME',
          },
          {
            name: 'updated_at',
            type: 'DATETIME',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('task');
  }
}
