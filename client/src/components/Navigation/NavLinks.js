import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import AuthContext from '../Contexts/AuthContext';

const linkStyles = { height: "100%" }
const activeStyle = { background: '#3d3e3f'}

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