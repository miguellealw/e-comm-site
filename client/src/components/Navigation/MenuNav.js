import React, { Component, Fragment } from 'react';
import { Button, Menu, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

const linkStyles = {
  height: "100%"
}

const menuStyles = {
  margin: 0,
}

const segmentStyles = {
  margin: 0,
  border: 'none'
}

const activeStyle = {
  background: '#3d3e3f'
}

export default class MenuNav extends Component {
  render() {
    const {render: Content} = this.props;
    return (
    <Fragment>
      <Menu size='large' style={menuStyles} inverted>

        <NavLink to="/" exact activeStyle={activeStyle}>
          <Menu.Item 
            name='home' 
            as="p"
          />
        </NavLink>

        <NavLink to="/store" style={linkStyles} activeStyle={activeStyle}>
          <Menu.Item
            name='store'
            as="p"
          />
        </NavLink>

        {/* Right Nav Links */}
        <Menu.Menu position='right'>

          <NavLink to="/login" activeStyle={activeStyle}>
            <Menu.Item as="p">
              Login
            </Menu.Item>
          </NavLink>

          <NavLink to="/signup" activeStyle={activeStyle}>
            <Menu.Item as="p">
              Signup
              {/* <Button primary>Sign Up</Button> */}
            </Menu.Item>
          </NavLink>

          <NavLink to="/profile" activeStyle={activeStyle}>
            <Menu.Item as="p">
              Profile
            </Menu.Item>
          </NavLink>

        </Menu.Menu>
      </Menu>

      <Segment style={segmentStyles}>
        <Content />
      </Segment>

    </Fragment>
    );
  }
}