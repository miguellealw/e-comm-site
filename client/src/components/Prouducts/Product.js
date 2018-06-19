import React, { Component } from 'react';
import { Card, Image, Rating, Popup } from 'semantic-ui-react';

const ratingStyles = {
  margin: '.5em 0'
}

const Product = ({ name, price, image, seller }) => (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{name} · ${price}</Card.Header>

        <Card.Meta style={ratingStyles}>
          <Rating icon="star" defaultRating={4} maxRating={5} size="mini"/>
        </Card.Meta>

        <Card.Meta>
          <span className='date'>by {seller} </span>
        </Card.Meta>
      </Card.Content>
    </Card>      
);

const ProductPopup = (product) => {
  return (
    <Popup trigger={Product(product)} size="tiny"> 
      <Popup.Header>
        Description
      </Popup.Header>
      <Popup.Content>
        {product.description}
      </Popup.Content>
    </Popup>
  );
};

export default ProductPopup;