import React, {Fragment} from 'react';
import { Header, Icon, Form, Button } from 'semantic-ui-react';
// import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

// const FormItem = Form.Item;

const title = { padding: '1em 0em' };

const buttonStyles = { width: '100%' };
const message = { textAlign: 'center', color: "#ccc" };

const SignupForm = ({ handleSubmit, handleChange }) => {
  return (
    <Fragment>
      <Header as="h1" style={title}>Signup</Header>
      <Form onSubmit={handleSubmit}>

        <Form.Input 
          label="Fullname: " 
          name="fullName"
          placeholder="Joe Schome" 
          type="text" 
          onChange={handleChange}
          required
        />
        <Form.Input 
          label="Email: " 
          name="email"
          placeholder="joe@schmoe.com" 
          type="email" 
          onChange={handleChange}
          required
        />
        <Form.Input 
          label="Password: " 
          name="password"
          placeholder="Password" 
          type="password" 
          onChange={handleChange}
          required
        />

        <Button type="submit" animated="fade" fluid primary style={buttonStyles}>
          <Button.Content visible>Signup</Button.Content>
          <Button.Content hidden>
            <Icon name="right arrow"/>
          </Button.Content>
        </Button>

        <p style={message}>
          Already have an account? — <Link to="/login">Login</Link>
        </p>
      </Form>
    </Fragment>
  );
};

export default SignupForm;