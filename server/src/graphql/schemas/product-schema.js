import UserSchema from './user-schema';

const ProductSchema = `
  type Product {
    _id: ID!
    name: String!
    description: String
    quantity: Int!
    price: Float!
    createdAt: Date!
    updatedAt: Date!
    owner: User!
  }
`
export default [ProductSchema, UserSchema];