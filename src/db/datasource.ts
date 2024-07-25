import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const MySqlSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  migrations: ['src/db/migrations/*.ts'],
  subscribers: [],
});
