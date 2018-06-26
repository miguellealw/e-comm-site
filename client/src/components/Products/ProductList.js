import React from 'react';
import { Grid, Message, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';

import Product from './Product';

import GET_PRODUCTS from '../../graphql/queries/getProducts';


const linkStyles = {
  // backgroundColor: 'red',
  // paddingLeft: 0,
  // paddingRight: 0
}

const ProductLink = (product) => (
  <Link to={`/store/${product.name}`} style={linkStyles}>
    <Product {...product}/>
  </Link>
)

const ProductList = () => (
  <Query query={GET_PRODUCTS}>
    {({loading, error, data}) => {
      if(loading) return <Loader active={loading}>Loading Store...</Loader>
      if(error) return <Message negative size="big" header={`${error}`}/>

      return (
        <Grid stretched columns={4} relaxed={'very'}>
          {data.getProducts.map((product, i) => (
            <Grid.Column key={i}>
              <ProductLink {...product}/>
            </Grid.Column>
          ))}
        </Grid>
      )
    }}
  </Query>
);

export default ProductList;