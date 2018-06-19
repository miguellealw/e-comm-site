import CurrentUserSchema from './currentUser-schema';
import ProductSchema from './product-schema';
// import UserSchema from './user-schema';
import MiscSchema from './misc-schema';

const RootQuery = `
  type Query {
    getProduct(_id: ID!): Product
    getUserProducts: [Product]
    getProducts: [Product]
    currentUser: currentUser
  }
`

const RootMutation = `
  type Mutation {
    createProduct(name: String!, description: String): Product
    updateProduct(_id: ID!, name: String, description: String): Product
    deleteProduct(_id: ID!): Status
    signup(email: String!, fullName: String!, password: String!, avatar: String): Boolean
    login(email: String!, password: String!): Boolean
  }
`

const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`

export default [
  SchemaDefinition,
  RootQuery,
  RootMutation,
  MiscSchema,
  CurrentUserSchema,
  ...ProductSchema,
]


// export default`
//   scalar Date

//   type Status {
//     message: String!
//   }

//   type Auth {
//     token: String!
//   }

//   type User {
//     _id: ID!
//     email: String!
//     firstName: String!
//     lastName: String!
//     avatar: String
//     createdAt: Date!
//     updatedAt: Date!
//   }

//   type currentUser {
//     _id: ID!
//     email: String!
//     firstName: String!
//     lastName: String!
//     avatar: String
//     createdAt: Date!
//     updatedAt: Date!
//   }

//   type Product {
//     _id: ID!
//     name: String!
//     description: String
//     price: Float!
//     createdAt: Date!
//     updatedAt: Date!
//     owner: User!
//   }

//   type Query {
//     getProduct(_id: ID!): Product
//     getUserProducts: [Product]
//     getProducts: [Product]
//     currentUser: currentUser
//   }

//   type Mutation {
//     createProduct(name: String!, description: String): Product
//     updateProduct(_id: ID!, name: String, description: String): Product
//     deleteProduct(_id: ID!): Status
//     signup(email: String!, fullName: String!, password: String!, avatar: String): Auth
//     login(email: String!, password: String!): Auth
//   }

//   schema {
//     query: Query
//     mutation: Mutation
//   }
// `