import GraphQLDate from 'graphql-date';
import ProductResolvers from './product-resolvers';
import UserResolvers from './user-resolvers';
import User from '../../models/User';

export default {
  Date: GraphQLDate,
  Product: {
    owner: (parent) => User.findById(parent.owner),
  },
  Query: {
    getProduct: ProductResolvers.getProduct,
    getProducts: ProductResolvers.getProducts,
    getUserProducts: ProductResolvers.getUserProducts,
    currentUser: UserResolvers.currentUser,
  },
  Mutation: {
    createProduct: ProductResolvers.createProduct,
    updateProduct: ProductResolvers.updateProduct,
    deleteProduct: ProductResolvers.deleteProduct,
    signup: UserResolvers.signup,
    login: UserResolvers.login,
    logout: UserResolvers.logout
  }
}