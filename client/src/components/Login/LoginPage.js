import React, { Component } from 'react';
import { Container, Loader } from 'semantic-ui-react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import LOGIN_USER from '../../graphql/mutations/login'
import LoginForm from './LoginForm';

const page = {
  height: '100vh'
}

class LoginPage extends Component {
  state = {
    email: '',
    password: ''
  }

  handleLogin = (login, client) => async (e) => {
    // e.preventDefault();
    await login({
      variables: {
        email: this.state.email,
        password: this.state.password 
      }
    })
    client.resetStore()
    // TODO fix this 
    /*
    not working becuase auth status is not updated when
    logged in; page needs to be refreshed which is
    unwanted behavior
    */
  //  this.props.history.push('/profile')
  }

  handleChange = (e, { name, value }) => {
    this.setState({[name]: value})
  }

  render() {
    return (
      <Mutation mutation={LOGIN_USER} onCompleted={() => this.props.history.push('/')} >
        {(login, { loading, error }) => {
          if(loading) {
            return <Loader active={loading}>Logging In...</Loader>;
          }
          if(error) return `Error - ${error}`;

          return (
            <ApolloConsumer>
              {client => (
                <Container text style={page}>
                  <LoginForm 
                    handleChange={this.handleChange} 
                    handleLogin={this.handleLogin(login, client)}
                  />
                </Container>
              )}
            </ApolloConsumer>
          )
        }}
      </Mutation>
    );
  }
}

export default withRouter(LoginPage)