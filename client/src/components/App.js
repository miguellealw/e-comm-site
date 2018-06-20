import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 
'react-router-dom';
import gql from 'graphql-tag';
import {Query} from 'react-apollo'

/* Misc */
import '../styles/App.css'
import AuthContext from './Contexts/AuthContext';

/* Components */
import Home from './Home/Home';
import LoginPage from './Login/LoginPage';
import SignupPage from './Signup/SignupPage';
import ProductPage from './Prouducts/ProductPage';
import Store from './Prouducts/Store';
import MenuNav from './Navigation/MenuNav';
import ProfilePage from './Profile/ProfilePage';
import PrivateRoute from './Modules/PrivateRoute';

const globalStyle = {
  minHeight: '100vh'
}


const IS_LOGGED_IN = gql`
  query {
    currentUser {
      firstName
    }
  }
`

const Root = ({ toggleVisibility }) => (
  <Query query={IS_LOGGED_IN}>
    {( { loading, error, data } ) => {
      if(loading) return "Loading...";
      if(error && error.message !== "GraphQL error: Unauthorized") {
        return `Error - ${error}`
      }
      const isAuthed = !!data.currentUser 

      return (
        <AuthContext.Provider value={isAuthed}>
          <MenuNav render={() => (
            <div style={globalStyle}>
              <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/store/:name" component={ ProductPage } />
                <PrivateRoute isAuthed={isAuthed} exact path="/profile" component={ ProfilePage } />
                <Route path="/store" component={ Store } />
                <Route path="/login" component={ LoginPage } />
                <Route path="/signup" component={ SignupPage }/>
              </Switch>
            </div>
          )}/>
        </AuthContext.Provider>
      )
    }}
  </Query>
)

class App extends Component {
  render() {
    return (
      <Router>
        <Root />
      </Router>
    );
  }
}

export default App;
