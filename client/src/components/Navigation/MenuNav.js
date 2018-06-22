import React, { Component, Fragment } from 'react';
import { Menu, Segment } from 'semantic-ui-react'

/* NavLinks */
import {
  HomeNavLink,
  StoreNavLink,
  LoginNavLink,
  SignupNavLink,
  ProfileNavLink,
  CartNavLink,
  LogoutNavLink
} from './NavLinks';

const menuStyles = { margin: 0 }
const segmentStyles = {
  margin: 0,
  border: 'none'
}

export default class MenuNav extends Component {
  render() {
    const {render: Content} = this.props;
    return (
    <Fragment>
      <Menu size='large' style={ menuStyles }>

        <HomeNavLink />
        <StoreNavLink />

        {/* Right Nav Links */}
        <Menu.Menu position='right'>
          <LoginNavLink />
          <SignupNavLink />
          <ProfileNavLink />
          <CartNavLink />
          <LogoutNavLink />
        </Menu.Menu>

      </Menu>

      <Segment style={segmentStyles}>
        <Content />
      </Segment>

    </Fragment>
    );
  }
}