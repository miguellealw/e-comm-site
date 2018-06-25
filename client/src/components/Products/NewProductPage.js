import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import NewProductForm from './NewProductForm';
import { Mutation } from 'react-apollo';

import ADD_PRODUCT from '../../graphql/mutations/createProduct';

export default class NewProductPage extends Component {
  render() {
    return (
      <Mutation mutation={ADD_PRODUCT}>
        {(createProduct, {loading, error}) => {
          if(loading) return "Adding product..."
          if(error) return `Error adding product - ${error}`

          return (
            <div>
              <Container text>
                <Header as="h1">Add a New Product</Header>
                <NewProductForm createProduct={createProduct}/>
              </Container>
            </div>
          )
        }}
      </Mutation>
    );
  }
}