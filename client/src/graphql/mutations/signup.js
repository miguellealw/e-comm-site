import gql from 'graphql-tag';

export default gql `
  mutation signup(
    $email: String!, 
    $fullName: String!, 
    $password: String!
  ) {
    signup (
      email: $email
      fullName: $fullName, 
      password: $password
    )
  }
`