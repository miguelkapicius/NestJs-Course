import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Property } from 'src/entities/property.entity';
import { PropertyFeatures } from 'src/entities/propertyFeatures.entity';
import 'dotenv/config';

export const pgConfig: PostgresConnectionOptions = {
  url: process.env.POSTGRES_URL,
  type: 'postgres',
  port: 3306,
  entities: [Property, PropertyFeatures],
  synchronize: true, // somente em dev
};
