import { faker } from '@faker-js/faker';
import { PropertyFeatures } from '../entities/propertyFeatures.entity';
import { setSeederFactory } from 'typeorm-extension';

export const PropertyFeaturesFactory = setSeederFactory(
  PropertyFeatures,
  () => {
    const propertyFeatures = new PropertyFeatures();
    propertyFeatures.area = faker.number.int({ min: 25, max: 2500 });
    propertyFeatures.bathrooms = faker.number.int({ min: 1, max: 5 });
    propertyFeatures.bedrooms = faker.number.int({ min: 1, max: 5 });
    propertyFeatures.parkingSpots = faker.number.int({ min: 1, max: 5 });
    propertyFeatures.hasBalcony = faker.datatype.boolean();
    propertyFeatures.hasGardenYard = faker.datatype.boolean();
    propertyFeatures.hasSwimmingPool = faker.datatype.boolean();

    return propertyFeatures;
  },
);
