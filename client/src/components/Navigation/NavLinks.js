import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import AuthContext from '../Contexts/AuthContext';
import { Mutation } from 'react-apollo';
import logoutUser from '../../graphql/mutations/logout';

const linkStyles = { height: "100%" }
// const activeStyle = { background: '#3d3e3f'}
const activeStyle = { background: '#f2f2f2f2'}

export const HomeNavLink = () => (
  <NavLink to="/" exact activeStyle={activeStyle}>
    <Menu.Item 
      name='home' 
      as="p"
    />
  </NavLink>
)

export const StoreNavLink = () => (
  <NavLink to="/store" style={linkStyles} activeStyle={activeStyle}>
    <Menu.Item
      name='store'
      as="p"
    />
  </NavLink>
)

export const LoginNavLink = () => (
  <AuthContext.Consumer>
    {isAuthed => {
      if(!isAuthed) {
        return (
          <NavLink to="/login" activeStyle={activeStyle}>
            <Menu.Item as="p">
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
            <Menu.Item as="p">
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
              <Menu.Item as="p">
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
              <Menu.Item as="p">
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

export const LogoutNavLink = ({logout}) => (
  <AuthContext.Consumer>
    {(isAuthed) => {
        if (isAuthed) {
          return (
            <Mutation mutation={logoutUser}>
              {(logout, {loading, error}) => {
                if(loading) return "Logging out..."
                if(error) return `Error logging out: ${error}`

                return (
                  <Link to="/" onClick={logout}>
                    <Menu.Item as="p">
                      Logout
                    </Menu.Item>
                  </Link>
                )
              }}
            </Mutation>
          )
        }
      }
    }
  </AuthContext.Consumer>
)