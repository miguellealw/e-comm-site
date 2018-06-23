import React from 'react';
import { Grid } from 'semantic-ui-react';
// import { Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom';

import Product from './Product';

import MockData from '../../utils/utils';


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
  <Grid stretched columns={3} relaxed={'very'}>
    {MockData.map((product, i) => (
      <Grid.Column key={i}>
        <ProductLink {...product}/>
      </Grid.Column>
    ))}
  </Grid>
);

export default ProductList;