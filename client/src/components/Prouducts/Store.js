import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';

import ProductList from './ProductList';

const title = {
  padding: '1em 0em'
}

const page = {
  minHeight: '100vh'
}
 
export default class Store extends Component {
  render() {
    return (
    <Container style={page}>
      <Header as="h1" style={title}>Store</Header>
      <ProductList />
    </Container>
    );
  }
}