import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import NewProductForm from './NewProductForm'

export default class NewProduct extends Component {
  render() {
    return (
      <div>
        <Container text>
          <Header as="h1">Add a New Product</Header>
          <NewProductForm />
        </Container>
      </div>
    );
  }
}