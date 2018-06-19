import faker from 'faker';

import Product from '../models/Product';
import User from '../models/User';

const PRODUCTS_TOTAL = 3;
const USERS_TOTAL = 3;

export default async () => {
  try {
    await Product.remove();
    await User.remove();

    await Array.from({ length: USERS_TOTAL }).forEach(async (_, i) => {
      // Create owner mock
      const owner = await User.create({
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        avatar: `https://randomuser.me/api/portraits/women/${i}.jpg`,
        password: 'password123'
      })
      
      // Create product mock
      await Array.from({ length: PRODUCTS_TOTAL }).forEach(async () => {
        await Product.create({ 
          name: faker.commerce.productName(), 
          description: faker.lorem.paragraphs(1), 
          price: faker.commerce.price(),
          owner: owner._id 
        })
      })
    });

  } catch (error) {
    throw error;
  }
}