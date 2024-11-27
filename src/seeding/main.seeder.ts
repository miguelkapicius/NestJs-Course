import { faker } from '@faker-js/faker';
import { Property } from '../entities/property.entity';
import { PropertyFeatures } from '../entities/propertyFeatures.entity';
import { PropertyType } from '../entities/propertyType.entity';
import { User } from '../entities/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const typeRepo = dataSource.getRepository(PropertyType);

    console.log('Seeding PropertyTypes...');
    const propertyTypes = await typeRepo.save([
      { value: 'Condo' },
      { value: 'Apartment' },
    ]);

    const userFactory = factoryManager.get(User);

    console.log('Seeding users...');
    const users = await userFactory.saveMany(10);

    const propertyFactory = factoryManager.get(Property);
    const propertyFeaturesFactory = factoryManager.get(PropertyFeatures);
    const properties = await Promise.all(
      Array(50)
        .fill('')
        .map(async () => {
          const property = await propertyFactory.make({
            user: faker.helpers.arrayElement(users),
            type: faker.helpers.arrayElement(propertyTypes),
            propertyFeatures: await propertyFeaturesFactory.save(),
          });

          return property;
        }),
    );

    const propertyRepo = dataSource.getRepository(Property);
    await propertyRepo.save(properties);
  }
}
