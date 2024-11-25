import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Property } from 'src/property/entities/property.entity';

export const pgConfig: PostgresConnectionOptions = {
  url: 'postgresql://neondb_owner:py7gSsFeRK2I@ep-round-art-a47nxpt1.us-east-1.aws.neon.tech/neondb?sslmode=require',
  type: 'postgres',
  port: 3306,
  entities: [Property], // adiciona todas as entidades
  synchronize: true, // somente em dev
};
