import React, { Fragment } from 'react';
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

const dropzoneStyles = {
  padding: "1em"
}

function onDrop() {
  console.log('file dropped on Dropzone!!')
} 

const ErrorMessage = (errors) => (
  Object.keys(errors.errors).length !== 0 && (
    <Message 
      negative
      size="tiny"
      header="Please fix these errors to proceed..."
      list={Object.values(errors.errors)}
    />
  )
)

const NewProductForm = ({
  values,
  errors,
  handleChange,
  handleSubmit
}) => (
  <Form onSubmit={handleSubmit}>

    <ErrorMessage errors={errors} />

    <Form.Group widths="equal">
      <Form.Input 
        label="Product Name"
        name="name"
        onChange={handleChange}
        placeholder="Computer"
      />
      <Form.Input 
        label="Quantity"
        name="quantity"
        type="number"
        placeholder="1"
        min="1"        
        onChange={handleChange}
      />
      
      <Form.Input 
        label="Price"
        name="price"
        type="price"
        placeholder="9.99"
        onChange={handleChange}
        labelPosition="right"
      >
        <Label basic>$</Label>
        <input />
        <Label>.00</Label>
      </Form.Input>
    </Form.Group>
    
    <Form.Input 
        label="Product Image"
        name="image"
        type="file"
        onChange={handleChange}
      />
    {/* <Dropzone>
      {({}) => {

        return "Product Image"
      }}
    </Dropzone> */}

    <label htmlFor="productDescription">Product Description</label>
    <TextArea 
      name="description"
      id="productDescription"
      style={textAreaStyles}
      onChange={handleChange}
    />

    <Button primary type="submit">Add Product</Button>
  </Form>
);

export default withFormik({
  handleSubmit: (values, actions) => {
    console.log(values);
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