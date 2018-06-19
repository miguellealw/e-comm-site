import React, { Component, Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
// import { Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom';

import ProductPopup from './Product';

import MockData from '../../utils/utils'


const linkStyles = {
  // backgroundColor: 'red',
  // paddingLeft: 0,
  // paddingRight: 0
}

const ColStyles = {
  marginBottom: "16px"
}

const RowStyles = {
  width: "100%"
}

const morphArrayTo2d = (arr, columns) => {
  if(!arr || !Array.isArray(arr)) {
    throw new Error(`
      Expected array to be a valid array, instead got ${typeof arr}
    `)
  }
  if(!columns || typeof columns !== "number") {
    throw new Error(`
      Expected columns to be integer, instead got ${typeof columns}
    `)
  }

  let newArr = [];
  /* Create temporary array to avoid mutating arr with splice */
  let tmpArr = [...arr];

  while (tmpArr.length) newArr.push(tmpArr.splice(0, columns))

  return newArr;
}

const ProductLink = (product) => (
  <Link to={`/store/${product.name}`} style={linkStyles}>
    <ProductPopup {...product}/>
  </Link>
)


export default class ProductList extends Component {
  state = {

  }

  render() {
    return (
      <Grid stretched columns={3} relaxed={'very'}>
        {MockData.map(({name, price, description, image, seller}, i) => (
          <Grid.Column key={i}>
            <Link to={`/store/${name}`} style={linkStyles}>
              <ProductPopup
                name={name} 
                price={price}
                description={description}
                image={image}
                seller={seller}
              />            
            </Link>
          </Grid.Column>
        ))}
      </Grid>
      // <Fragment>
      //   {
      //     morphArrayTo2d(MockData, 4).map((productTable, i) => (
      //       <Row gutter={16} key={i} style={RowStyles}>
      //         {
      //           productTable.map((product, j) => (
      //             <Col span={4} key={j} style={ColStyles}>
      //               <ProductLink {...product} />
      //             </Col>
      //           ))
      //         }
      //       </Row>
      //     ))
      //   }
      //   <div>

      //   </div>
      // </Fragment>
    );
  }
}