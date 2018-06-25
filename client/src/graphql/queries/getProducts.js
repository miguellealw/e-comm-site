import gql from 'graphql-tag'

export default gql `
  query {
    getProducts {
      name
      price
      owner {
        firstName
        lastName
      }
    }
  } 
`