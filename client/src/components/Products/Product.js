import React, { Fragment } from 'react';
import { 
  Card, 
  Image, 
  Rating, 
  Popup, 
  Icon,
  Label
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import AuthContext from '../Contexts/AuthContext';

const ratingStyles = { margin: '.5em 0' };
const cartButtonStyles = {...ratingStyles};
const cardContentStyles = { textAlign: 'center' };
const hrStyles = { borderTop: "1px solid #eee" }

const handleAddToCart = (e) => {
  e.preventDefault();
} 

const handleRating = (e) => {
  e.preventDefault();
}

const Product = ({ 
  name, 
  price, 
  image, 
  owner: { 
    firstName, 
    lastName 
  }}) => (
    <Card>
      <Image src={image} />
      <Card.Content style={cardContentStyles}>
        <Card.Header>
          {name} — <Label tag>${price}</Label>
        </Card.Header>

        <Card.Meta style={ratingStyles}>
          <Rating 
            icon="star" 
            defaultRating={4} 
            maxRating={5} 
            size="mini"
            onClick={handleRating}
          />
        </Card.Meta>

        <Card.Meta>
          <span className='date'>
            by <Link to={`/${name}`}>{firstName + ' ' + lastName}</Link> 
          </span>
        </Card.Meta>


        <AuthContext.Consumer>
          {(isAuthed) => isAuthed && (
            <Fragment>
              <hr style={hrStyles}/>

              <Card.Meta>
                <Popup 
                  trigger={
                    <Icon 
                      name="shop" 
                      size="large"
                      style={cartButtonStyles}
                      color="blue"
                      onClick={handleAddToCart}
                    />
                  }
                  content={`Add "${name}" to Cart`}
                  size="tiny"
                />
              </Card.Meta>
            </Fragment>
          )}
        </AuthContext.Consumer>

      </Card.Content>
    </Card>      
);

// const ProductPopup = (product) => {
//   return (
//     <Popup trigger={Product(product)} size="tiny"> 
//       <Popup.Header>
//         Description
//       </Popup.Header>
//       <Popup.Content>
//         {product.description}
//       </Popup.Content>
//     </Popup>
//   );
// };

export default Product;