import React, { Component, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import {Container} from 'semantic-ui-react'

import SIGNUP_USER from '../../graphql/mutations/signup';
import SignupForm from './SignupForm'

const pageStyles = {
  height: '100vh',
  // width: '100%'
};

class SignupPage extends Component {
  state = { 
    email: '',
    fullName: '',
    password: ''
   } 

  handleSignup = (signup) => (e) => {
    e.preventDefault();
    signup({
      variables: {
        email: this.state.email,
        fullName: this.state.fullName,
        password: this.state.password 
      }
    })
  }

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value})
  }

  render() {
    return (
      <Mutation mutation={ SIGNUP_USER }>
        {( signup, { loading, error } ) => {
        if(loading) return 'Loading...';
        if(error) return `Error - ${error}`;
        
        return (
          <Container text style={pageStyles}>
            <SignupForm 
              handleSubmit={this.handleSignup(signup)}
              handleChange={this.handleChange}
            />
          </Container>
        )}}
      </Mutation>
    );
  }
}

export default SignupPage;