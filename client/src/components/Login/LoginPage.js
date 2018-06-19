import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Mutation } from 'react-apollo';

import LOGIN_USER from '../../graphql/mutations/login'
import LoginForm from './LoginForm';

const page = {
  height: '100vh'
}

export default class LoginPage extends Component {
  state = {
    email: '',
    password: ''
  }

  handleLogin = (login) => (e) => {
    e.preventDefault();
    login({
      variables: {
        email: this.state.email,
        password: this.state.password 
      }
    })
  }

  handleChange = (e, { name, value }) => {
    this.setState({[name]: value})
  }

  render() {
    return (
      <Mutation mutation={LOGIN_USER}>
        {(login, { loading, error }) => {
          if(loading) return "Loading...";
          if(error) return `Error - ${error}`;

          return (
            <Container text style={page}>
              <LoginForm 
                handleChange={this.handleChange} 
                handleLogin={this.handleLogin(login)}
              />
            </Container>
          )
        }}
      </Mutation>
    );
  }
}