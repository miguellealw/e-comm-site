import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { Menu, Icon, Loader } from 'semantic-ui-react';
import AuthContext from '../Contexts/AuthContext';
import { Mutation, ApolloConsumer } from 'react-apollo';
import logoutUser from '../../graphql/mutations/logout';

const linkStyles = { height: "100%" }
// const activeStyle = { background: '#3d3e3f'}
const activeStyle = { background: '#f2f2f2f2'}

export const HomeNavLink = () => (
  <NavLink to="/" exact activeStyle={activeStyle}>
    <Menu.Item 
      name='home' 
      as="span"
    />
  </NavLink>
)

export const StoreNavLink = () => (
  <NavLink to="/store" style={linkStyles} activeStyle={activeStyle}>
    <Menu.Item
      name='store'
      as="span"
    />
  </NavLink>
)

export const LoginNavLink = () => (
  <AuthContext.Consumer>
    {isAuthed => {
      if(!isAuthed) {
        return (
          <NavLink to="/login" activeStyle={activeStyle}>
            <Menu.Item as="span">
              Login
            </Menu.Item>
          </NavLink>
        )
      }
    }}
  </AuthContext.Consumer>
)

export const SignupNavLink = () => (
  <AuthContext.Consumer>
    {isAuthed => {
      if(!isAuthed) {
        return (
          <NavLink to="/signup" activeStyle={activeStyle}>
            <Menu.Item as="span">
              Signup
            </Menu.Item>
          </NavLink>
        )
      }
    }}
  </AuthContext.Consumer>
)

export const ProfileNavLink = () => (
  <AuthContext.Consumer>
    {(isAuthed) => {
        if (isAuthed) {
          return (
            <NavLink to="/profile" activeStyle={activeStyle}>
              <Menu.Item as="span">
                Profile
              </Menu.Item>
            </NavLink>
          )
        }
      }
    }
  </AuthContext.Consumer>
)

export const CartNavLink = () => (
  <AuthContext.Consumer>
    {(isAuthed) => {
        if (isAuthed) {
          return (
            <NavLink to="/cart" activeStyle={activeStyle}>
              <Menu.Item as="span">
                <Icon 
                  name="shop" 
                  size="small"
                />
              </Menu.Item>
            </NavLink>
          )
        }
      }
    }
  </AuthContext.Consumer>
)

export const NewProductNavLink = () => (
  <AuthContext.Consumer>
    {(isAuthed) => {
        if (isAuthed) {
          return (
            <NavLink to="/new-product" activeStyle={activeStyle}>
              <Menu.Item as="span">
                <Icon 
                  name="plus circle" 
                  size="small"
                />
              </Menu.Item>
            </NavLink>
          )
        }
      }
    }
  </AuthContext.Consumer>
)


/* 
<========================================>
  Logout Nav Link
<========================================>
*/

const handleLogout = (logout, client, history) => (_) => {
  logout();
  history.push('/');
  // Reset cache to reflect auth status
  client.resetStore();
}  

const LogoutMenuTab = ({history}) => (
  <Mutation mutation={logoutUser}>
    {(logout, { loading, error }) => {
      if(loading) return <Loader active={loading}>Logging Out...</Loader>
      if(error) return `Error logging out: ${error}`

      return (
        <ApolloConsumer>
          {client => (
            <Link to="#" onClick={handleLogout(logout, client, history)}>
              <Menu.Item as="span">
                Logout
              </Menu.Item>
            </Link>
          )}
        </ApolloConsumer>
      )
    }}
  </Mutation>
)

const LogoutMenuTabWithRouter = withRouter(LogoutMenuTab)

export const LogoutNavLink = () => (
  <AuthContext.Consumer>
    {(isAuthed) => isAuthed && <LogoutMenuTabWithRouter />}
  </AuthContext.Consumer>
)