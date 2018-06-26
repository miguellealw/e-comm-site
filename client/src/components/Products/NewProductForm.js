import React from 'react';
import { withFormik } from 'formik';
import { 
  Form, 
  Button, 
  TextArea, 
  Message,
  Label
} from 'semantic-ui-react';
// import Dropzone from 'react-dropzone';
import * as yup from 'yup';

const textAreaStyles = {
  minHeight: 100,
  maxHeight: 300
}

const isEmpty = (obj) => Object.keys(obj).length === 0

const ErrorMessage = (errors) => (
  !isEmpty(errors.errors) && (
    <Message 
      negative
      size="tiny"
      header="Please fix these errors to proceed..."
      list={Object.values(errors.errors)}
    />
  )
)

const NewProductForm = ({
  errors,
  handleChange,
  handleSubmit,
  createProduct
}) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group widths="equal">
      <Form.Input 
        label="Product Name"
        name="name"
        onChange={handleChange}
        placeholder="Computer"
        error={!!errors.name}
      />
      <Form.Input 
        label="Quantity"
        name="quantity"
        type="number"
        placeholder="1"
        min="1"        
        onChange={handleChange}
        error={!!errors.quantity}
      />
      
      <Form.Input 
        label="Price"
        name="price"
        type="number"
        step={0.01}
        placeholder="559.99"
        onChange={handleChange}
        labelPosition="right"
        error={!!errors.price}
      >
        <Label basic>$</Label>
        <input />
      </Form.Input>

    </Form.Group>
    
    <Form.Input 
        label="Product Image"
        name="image"
        type="file"
        onChange={handleChange}
      />

    <label htmlFor="productDescription">Product Description</label>
    <TextArea 
      name="description"
      id="productDescription"
      style={textAreaStyles}
      onChange={handleChange}
    />

    <ErrorMessage errors={errors} />

    <Button primary type="submit">Add Product</Button>
  </Form>
);

export default withFormik({
  handleSubmit: (values, { props: { createProduct } }) => {
    createProduct({
      variables: {
        name: values.name,
        price: values.price,
        description: values.description,
        quantity: values.quantity
      }
    })
  },
  validationSchema: () => 
    yup.object().shape({
      name: yup.string().required(),
      quantity: yup
        .number()
        .moreThan(1)
        .positive()
        .integer()
        .required(),
      price: yup
        .number()
        .positive()
        .required(),
      description: yup.string(),
    })
})(NewProductForm);