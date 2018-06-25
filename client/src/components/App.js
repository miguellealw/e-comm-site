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
import ProductPage from './Products/ProductPage';
import CartPage from './Cart/CartPage';
import Store from './Products/Store';
import NewProductPage from './Products/NewProductPage';
import MenuNav from './Navigation/MenuNav';
import ProfilePage from './Profile/ProfilePage';
import PrivateRoute from './Modules/PrivateRoute';

const globalStyle = {
  minHeight: '100vh'
}

const IS_LOGGED_IN = gql`
  query {
    currentUser {
      _id
      firstName
    }
  }
`

const Root = ({ toggleVisibility }) => (
  <Query query={IS_LOGGED_IN}>
    {( { loading, error, data } ) => {
      if(loading) return "Loading...";
      // Temp fix to unauthed errors
      if (
        error && 
        (error.message !== "GraphQL error: Unauthorized" || error.message === "Unauthorized")
      ) {
        return `Error - ${error}`
      }
      const isAuthed = data !== undefined ? !!data.currentUser : false

      return (
        <AuthContext.Provider value={isAuthed}>
          <MenuNav render={() => (
            <div style={globalStyle}>
              <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/store/:name" component={ ProductPage } />
                <PrivateRoute isAuthed={isAuthed} exact path="/profile" component={ ProfilePage } />
                <PrivateRoute isAuthed={isAuthed} exact path="/cart" component={ CartPage } />
                <PrivateRoute isAuthed={isAuthed} exact path="/new-product" component={ NewProductPage } />
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
