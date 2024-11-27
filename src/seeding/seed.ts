import dbConfig from '../config/db.config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { PropertyFactory } from './property.factory';
import { UserFactory } from './user.factory';
import { PropertyFeaturesFactory } from './propertyFeatures.factory';
import { MainSeeder } from './main.seeder';

const options: DataSourceOptions & SeederOptions = {
  ...dbConfig(),
  factories: [PropertyFactory, UserFactory, PropertyFeaturesFactory],
  seeds: [MainSeeder],
};

const dataSource = new DataSource(options);
dataSource.initialize().then(async () => {
  await dataSource.synchronize(true);
  await runSeeders(dataSource);
  process.exit();
});