import gql from 'graphql-tag';

const ADD_PRODUCT = gql`
  mutation createProduct($name: String!, $description: String, $price: Float!, $quantity: Int! ){
    createProduct(
      name: $name,
      description: $description
      price: $price
      quantity: $quantity
    ) {
      _id
      name
      price
      quantity
    }
  }
`

export default ADD_PRODUCT;