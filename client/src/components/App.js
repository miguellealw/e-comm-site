import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 
'react-router-dom';
import '../styles/App.css'
import { Button } from 'semantic-ui-react';
// import { Layout, Content } from 'antd';
import gql from 'graphql-tag';
// import {Query} from 'react-apollo';

/* Components */
import Home from './Home/Home';
import LoginPage from './Login/LoginPage';
import SignupPage from './Signup/SignupPage';
import ProductPage from './Prouducts/ProductPage';
import Store from './Prouducts/Store';
// import SidebarNav from './SidebarNav';
// import Navigation from './Navigation'
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
  // <Query query={IS_LOGGED_IN}>
  //   {( { loading, error, data } ) => {
  //     if(loading) return "Loading...";
  //     // if(error) return `Error - ${error}`

  //     return (
    <div style={globalStyle}>
      {/* <Navigation /> */}
      {/* <Button onClick={toggleVisibility}>Navigation</Button> */}
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/store/:name" component={ ProductPage } />
        <PrivateRoute isAuthed={true} exact path="/profile" component={ ProfilePage } />
        <Route path="/store" component={ Store } />
        <Route path="/login" component={ LoginPage } />
        <Route path="/signup" component={ SignupPage }/>
      </Switch>
    </div>
  //     )
  //   }}
  // </Query>
)

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Root /> */}
        <MenuNav render={Root}/>
        {/* <SidebarNav render={Root}/> */}
      </Router>
    );
  }
}

export default App;
