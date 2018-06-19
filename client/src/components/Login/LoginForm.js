import React, { Fragment } from 'react';
import { Header, Button, Form, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const title = {
  padding: '1em 0em'
}

const button = {
  color: 'white',
}

const message = {
  textAlign: 'center',
  color: "#ccc"
}


const LoginForm = ({ handleChange, handleLogin }) =>  (
  <Fragment>
    <Header as="h1" style={title}>Login</Header>
    <Form onSubmit={handleLogin}>

      <Form.Input 
        label="Email: " 
        name="email"
        placeholder="joe@schmoe.com" 
        type="email" 
        onChange={handleChange}
      />
      <Form.Input 
        label="Password: " 
        name="password"
        placeholder="Password" 
        type="password" 
        onChange={handleChange}
      />

      <Button type="submit" animated="fade" fluid primary style={button}>
        <Button.Content visible>Login</Button.Content>
        <Button.Content hidden>
          <Icon name="right arrow"/>
        </Button.Content>
      </Button>

      <p style={message}>
        Don't have an account? — <Link to="/signup">Sign Up</Link>
      </p>

    </Form>
  </Fragment>
);

export default LoginForm;